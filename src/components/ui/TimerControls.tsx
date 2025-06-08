import React from 'react';

interface TimerControlsProps {
    onStart: () => void;
    onPause: () => void;
    onReset: () => void;
    isRunning: boolean;
}

const TimerControls: React.FC<TimerControlsProps> = ({ onStart, onPause, onReset, isRunning }) => {
    return (
        <div className="flex flex-col items-center space-y-2 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <button
                onClick={onStart}
                disabled={isRunning}
                className="w-full sm:w-auto bg-green-800 hover:bg-green-700 text-black px-4 py-2 rounded border-green-500 border-2 disabled:opacity-50"
            >
                {`>`}START
            </button>
            <button
                onClick={onPause}
                disabled={!isRunning}
                className="w-full sm:w-auto bg-yellow-800 hover:bg-yellow-700 text-black px-4 py-2 rounded border-yellow-500 border-2 disabled:opacity-50"
            >
                ||PAUSE
            </button>
            <button
                onClick={onReset}
                className="w-full sm:w-auto bg-red-800 hover:bg-red-700 text-black px-5 py-2 rounded border-red-500 border-2"
            >
                []RESET
            </button>
        </div>
    );
};

export default TimerControls;