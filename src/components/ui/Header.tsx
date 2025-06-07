const Header = () => {
    return (
        <div className="text-center mb-6">
            <pre className="whitespace-pre-wrap text-xs">
                {`
                  ____   ___  __  __  ___   ___   ____  ____  ____ 
|  _ \ / _ \|  \/  |/ _ \ / _ \ / ___||  _ \|  _ \
| |_) | | | | |\/| | | | | | | | |  _ | |_) | |_) |
|  __/| |_| | |  | | |_| | |_| | |_| ||  _ <|  _ < 
|_|    \___/|_|  |_|\___/ \___/ \____||_| \_\_| \_\
                `}
            </pre>
            <div className="text-xs mt-1">RETRO POMODORO TIMER v1.0.0 (C)1983</div>
        </div>
    );
};

export default Header;