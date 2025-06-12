import React, { useState, useEffect } from 'react';

interface StatusBarProps {
    statusMessage: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ statusMessage }) => {
    const [currentDate, setCurrentDate] = useState<string>('');
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setCurrentDate(
                now.toLocaleDateString('en-US', {
                    year: '2-digit',
                    month: 'short',
                    day: 'numeric',
                })
            );
            setCurrentTime(
                now.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                })
            );
        };

        updateClock(); // Initial call
        const clockInterval = setInterval(updateClock, 1000 * 30);

        return () => clearInterval(clockInterval);
    }, []);

    return (
        <div className="mt-auto pt-2 border-t border-green-800 flex flex-col text-center space-y-1 sm:flex-row sm:text-left sm:justify-between sm:space-y-0 items-center text-xs">
            <div>READY</div>
            <div>{statusMessage}</div>
            <div>
                <span>{currentDate}</span> <span>{currentTime}</span>
            </div>
        </div>
    );
};

export default StatusBar;