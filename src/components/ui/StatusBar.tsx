const StatusBar = () => {
    const currentDate = "Jun 7, 25";
    const currentTime = "12:05 PM";
    const statusMessage = "SYSTEM INITIALIZED...";

    return (
        <div className="mt-auto pt-2 border-t border-green-800 flex flex-col text-center space-y-1 sm:flex-row sm:text-left sm:justify-between sm:space-y-0 items-center text-xs">
            <div>READY</div>
            <div id="status-message">{statusMessage}</div>
            <div>
                <span id="current-date">{currentDate}</span> <span id="current-time">{currentTime}</span>
            </div>
        </div>
    );
};

export default StatusBar;