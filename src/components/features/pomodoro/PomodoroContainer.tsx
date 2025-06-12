import React, { useState, useEffect, useCallback, useRef } from 'react';
import TimerDisplay from '@/components/ui/TimerDisplay';
import TimerControls from '@/components/ui/TimerControls';
import SessionInfo from '@/components/ui/SessionInfo';
import ProgressBar from '@/components/ui/ProgressBar';
import AsciiArtDisplay from '@/components/ui/AsciiArtDisplay';
import type { PomodoroSettings, SessionType } from '@/types/pomodoro';

interface PomodoroContainerProps {
    initialSettings: PomodoroSettings;
    onStatusUpdate: (message: string) => void;
}

const DEFAULT_SETTINGS: PomodoroSettings = {
    workTime: 25,
    shortBreak: 5,
    longBreak: 15,
    sessionsBeforeLongBreak: 4,
    soundEnabled: true,
};

const POMODORO_ART_VARIATIONS: string[] = [
    `   ,_     _,
|\\___//|
|=6   6=|
\\=._Y_.=/
 )  \`  (    ,
/       \\  ((
|         |   ))
/|  .   .  |\\_((
(_|   |   |  |_/
|  .   .  |
|   \\_/   |
\\_/ \\_/_/`,
    `  .-~~~-.
.'o O o\`.
: o O o O o :
: O o O o O :
\`o O o O o'
\`~~~o O'
    \`~~~'`,
];
let currentArtIndex = 0;


const PomodoroContainer: React.FC<PomodoroContainerProps> = ({ initialSettings, onStatusUpdate }) => {
    const [settings, setSettings] = useState<PomodoroSettings>(() => {
        const savedSettings = localStorage.getItem('pomodoroSettings');
        return savedSettings ? JSON.parse(savedSettings) : DEFAULT_SETTINGS;
    });

    useEffect(() => {
        setSettings(initialSettings);
    }, [initialSettings]);

    const [timeLeft, setTimeLeft] = useState<number>(settings.workTime * 60);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [currentSession, setCurrentSession] = useState<SessionType>('work');
    const [sessionCount, setSessionCount] = useState<number>(0); // Work sessions in current cycle
    const [currentPomodoroArt, setCurrentPomodoroArt] = useState<string>(POMODORO_ART_VARIATIONS[0]);

    const intervalRef = useRef<number | null>(null);
    useEffect(() => {
        onStatusUpdate('READY FOR WORK SESSION');
    }, [onStatusUpdate]);


    const getTimeForSession = useCallback((session: SessionType): number => {
        switch (session) {
            case 'work':
                return settings.workTime * 60;
            case 'shortBreak':
                return settings.shortBreak * 60;
            case 'longBreak':
                return settings.longBreak * 60;
            default:
                return settings.workTime * 60;
        }
    }, [settings]);

    const resetTimerInternal = useCallback((session: SessionType, message: string) => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsRunning(false);
        setCurrentSession(session);
        setTimeLeft(getTimeForSession(session));
        onStatusUpdate(message);
    }, [getTimeForSession]);


    const timerComplete = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsRunning(false);

        let nextSessionType: SessionType = 'work';
        let newSessionCount = sessionCount;
        let completionMessage = '';

        if (currentSession === 'work') {
            newSessionCount++;
            setSessionCount(newSessionCount);
            if (newSessionCount >= settings.sessionsBeforeLongBreak) {
                nextSessionType = 'longBreak';
                setSessionCount(0); // Reset for next cycle
                completionMessage = "LONG BREAK INITIALIZED";
            } else {
                nextSessionType = 'shortBreak';
                completionMessage = "SHORT BREAK INITIALIZED";
            }
            onStatusUpdate("WORK SESSION COMPLETED! TIME FOR A BREAK.");
        } else { // Break finished
            nextSessionType = 'work';
            completionMessage = "READY FOR WORK SESSION";
            if (currentSession === 'shortBreak') {
                onStatusUpdate("SHORT BREAK OVER! BACK TO WORK.");
            } else {
                onStatusUpdate("LONG BREAK OVER! READY FOR MORE WORK.");
            }
            // Change ASCII art
            currentArtIndex = (currentArtIndex + 1) % POMODORO_ART_VARIATIONS.length;
            setCurrentPomodoroArt(POMODORO_ART_VARIATIONS[currentArtIndex]);
        }
        resetTimerInternal(nextSessionType, completionMessage);
    }, [currentSession, sessionCount, settings.sessionsBeforeLongBreak, resetTimerInternal, onStatusUpdate]);


    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            intervalRef.current = window.setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0 && isRunning) {
            timerComplete();
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isRunning, timeLeft, timerComplete]);

    // Effect to reset timer when settings change for the current session type
    useEffect(() => {
        const newTimeForCurrentSession = getTimeForSession(currentSession);
        if (timeLeft > newTimeForCurrentSession && !isRunning) {
            setTimeLeft(newTimeForCurrentSession);
        } else if (!isRunning) {
            setTimeLeft(newTimeForCurrentSession);
        }
    }, [settings.workTime, settings.shortBreak, settings.longBreak, settings.sessionsBeforeLongBreak, getTimeForSession, currentSession, isRunning, /*resetTimerInternal*/]);


    const handleStart = () => {
        if (!isRunning) {
            if (timeLeft === 0) {
                setTimeLeft(getTimeForSession(currentSession));
            }
            setIsRunning(true);
            onStatusUpdate("TIMER RUNNING...");
        }
    };

    const handlePause = () => {
        if (isRunning) {
            setIsRunning(false);
            if (intervalRef.current) clearInterval(intervalRef.current);
            onStatusUpdate("TIMER PAUSED");
        }
    };

    const handleReset = () => {
        // Reset based on the *current* session type without advancing
        resetTimerInternal(currentSession, `TIMER RESET FOR ${currentSession.toUpperCase()}.`);
    };


    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const calculateProgress = (): number => {
        const totalTimeForCurrentSession = getTimeForSession(currentSession);
        if (totalTimeForCurrentSession === 0) return 0;
        return ((totalTimeForCurrentSession - timeLeft) / totalTimeForCurrentSession) * 100;
    };

    const getNextSessionTypeDisplay = (): string => {
        if (currentSession === 'work') {
            return (sessionCount >= settings.sessionsBeforeLongBreak - 1 && settings.sessionsBeforeLongBreak > 0) ? 'LONG BREAK' : 'SHORT BREAK';
        }
        return 'WORK';
    }


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                <div className="col-span-1 md:col-span-3 bg-gray-900 border-2 border-green-700 p-4 rounded">
                    <TimerDisplay sessionType={currentSession} timerValue={formatTime(timeLeft)} />
                    <TimerControls
                        onStart={handleStart}
                        onPause={handlePause}
                        onReset={handleReset}
                        isRunning={isRunning}
                    />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <SessionInfo
                        workSessionsCount={`${sessionCount}/${settings.sessionsBeforeLongBreak}`}
                        nextSessionType={getNextSessionTypeDisplay()}
                    />
                </div>
            </div>
            <ProgressBar progressPercent={calculateProgress()} />
            <AsciiArtDisplay art={currentPomodoroArt} />
        </>
    );
};

export default PomodoroContainer;