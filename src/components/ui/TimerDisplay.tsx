import React from 'react';

interface TimerDisplayProps {
    sessionType: string;
    timerValue: string;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ sessionType, timerValue }) => {
    return (
        <>
            <div className="text-center mb-2 text-sm">CURRENT SESSION</div>
            <div id="session-type" className="text-center text-lg sm:text-xl mb-4">
                {sessionType.toUpperCase()}
            </div>
            <div className="text-center text-4xl sm:text-5xl mb-4 font-mono" id="timer">
                {timerValue}
            </div>
        </>
    );
};

export default TimerDisplay;