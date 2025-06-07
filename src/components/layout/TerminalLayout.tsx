import React from 'react';
import type { ReactNode } from 'react';

interface TerminalLayoutProps {
    children: ReactNode;
}

const TerminalLayout: React.FC<TerminalLayoutProps> = ({ children }) => {
    return (
        <div className="relative max-w-4xl retro-font w-full crt terminal border-4 border-green-700 p-4 sm:p-6 rounded-lg flex flex-col min-h-[80vh] sm:min-h-[70vh]"> {/* Added flex flex-col and min-height for structure */}
            <div className="scanline"></div>
            {children}
        </div>
    );
};

export default TerminalLayout;