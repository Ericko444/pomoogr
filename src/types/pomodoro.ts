export type SessionType = 'work' | 'shortBreak' | 'longBreak';

export interface PomodoroSettings {
    workTime: number; // in minutes
    shortBreak: number; // in minutes
    longBreak: number; // in minutes
    sessionsBeforeLongBreak: number;
    soundEnabled: boolean;
}

export interface PomodoroState {
    timeLeft: number; // in seconds
    isRunning: boolean;
    currentSession: SessionType;
    sessionCount: number; // work sessions completed in current cycle
    statusMessage: string;
}