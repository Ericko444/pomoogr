import React from 'react';

interface ProgressBarProps {
    progressPercent: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progressPercent }) => {
    const displayPercent = Math.round(Math.min(100, Math.max(0, progressPercent)));

    return (
        <div className="mb-6">
            <div className="flex justify-between mb-1">
                <span className="text-xs">PROGRESS:</span>
                <span id="progress-percent" className="text-xs">
                    {displayPercent}%
                </span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-4">
                <div
                    id="progress-bar"
                    className="bg-green-600 h-4 rounded-full transition-all duration-300 ease-linear"
                    style={{ width: `${displayPercent}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;