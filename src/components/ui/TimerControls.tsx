import React from 'react';

const TimerControls: React.FC = () => {
    return (
        <div className="flex flex-col items-center space-y-2 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <button
                id="start-btn"
                className="w-full sm:w-auto bg-green-800 hover:bg-green-700 text-black px-4 py-2 rounded border-green-500 border-2"
            >
                {`>`}START
            </button>
            <button
                id="pause-btn"
                className="w-full sm:w-auto bg-yellow-800 hover:bg-yellow-700 text-black px-4 py-2 rounded border-yellow-500 border-2"
            >
                ||PAUSE
            </button>
            <button
                id="reset-btn"
                className="w-full sm:w-auto bg-red-800 hover:bg-red-700 text-black px-5 py-2 rounded border-red-500 border-2"
            >
                []RESET
            </button>
        </div>
    );
};

export default TimerControls;