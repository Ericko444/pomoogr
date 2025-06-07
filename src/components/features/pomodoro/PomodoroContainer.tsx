import React from 'react';
import TimerDisplay from '@/components/ui/TimerDisplay';
import TimerControls from '@/components/ui/TimerControls';
import SessionInfo from '@/components/ui/SessionInfo';


const PomodoroContainer: React.FC = () => {
    const currentSessionType: string = 'work';
    const timerValue: string = '25:00';
    const workSessionsCount: string = '0/4';
    const nextSessionType: string = 'short break';

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <div className="col-span-1 md:col-span-3 bg-gray-900 border-2 border-green-700 p-4 rounded">
                <TimerDisplay sessionType={currentSessionType} timerValue={timerValue} />
                <TimerControls />
            </div>

            <div className="col-span-1 md:col-span-2">
                <SessionInfo
                    workSessionsCount={workSessionsCount}
                    nextSessionType={nextSessionType}
                />
            </div>
        </div>
    );
};

export default PomodoroContainer;