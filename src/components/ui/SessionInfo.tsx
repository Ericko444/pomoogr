import React from 'react';

interface SessionInfoProps {
    workSessionsCount: string;
    nextSessionType: string;
}

const SessionInfo: React.FC<SessionInfoProps> = ({ workSessionsCount, nextSessionType }) => {
    return (
        <div className="bg-gray-900 border-2 border-green-700 p-4 rounded h-full">
            <div className="text-center mb-4 text-sm">SESSION INFO</div>
            <div className="mb-2">
                <div className="text-xs">WORK SESSIONS:</div>
                <div id="session-counter" className="text-lg sm:text-xl">
                    {workSessionsCount}
                </div>
            </div>
            <div className="mb-2">
                <div className="text-xs">NEXT SESSION:</div>
                <div id="next-session" className="text-lg sm:text-xl">
                    {nextSessionType.toUpperCase()}
                </div>
            </div>
            <div className="mt-4 pt-2 border-t border-green-800">
                <div className="text-xs">FUNCTION KEYS:</div>
                <div className="text-xs mt-1">F1: HELP</div>
                <div className="text-xs">F2: SETTINGS</div>
                <div className="text-xs">F3: SOUNDS</div>
            </div>
        </div>
    );
};

export default SessionInfo;