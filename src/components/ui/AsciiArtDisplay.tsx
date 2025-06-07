import React from 'react';

interface AsciiArtDisplayProps {
    art: string;
}

const AsciiArtDisplay: React.FC<AsciiArtDisplayProps> = ({ art }) => {
    return (
        <div className="text-center text-xs">
            <pre id="pomodoro-art" className="whitespace-pre-wrap">
                {art}
            </pre>
        </div>
    );
};

export default AsciiArtDisplay;