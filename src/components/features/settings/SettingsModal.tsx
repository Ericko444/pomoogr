import React, { useState, useEffect } from 'react';
import Modal from '@/components/ui/Modal';
import type { PomodoroSettings } from '@/types/pomodoro';

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentSettings: PomodoroSettings;
    onSave: (newSettings: PomodoroSettings) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, currentSettings, onSave }) => {
    const [workTime, setWorkTime] = useState<number>(currentSettings.workTime);
    const [shortBreak, setShortBreak] = useState<number>(currentSettings.shortBreak);
    const [longBreak, setLongBreak] = useState<number>(currentSettings.longBreak);
    const [sessionsBeforeLongBreak, setSessionsBeforeLongBreak] = useState<number>(
        currentSettings.sessionsBeforeLongBreak
    );

    useEffect(() => {
        setWorkTime(currentSettings.workTime);
        setShortBreak(currentSettings.shortBreak);
        setLongBreak(currentSettings.longBreak);
        setSessionsBeforeLongBreak(currentSettings.sessionsBeforeLongBreak);
    }, [currentSettings]);

    const handleSave = () => {
        const newSettings: PomodoroSettings = {
            ...currentSettings, // Preserve settings
            workTime: Number(workTime) || 25,
            shortBreak: Number(shortBreak) || 5,
            longBreak: Number(longBreak) || 15,
            sessionsBeforeLongBreak: Number(sessionsBeforeLongBreak) || 4,
        };
        onSave(newSettings);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="SYSTEM SETTINGS">
            <div className="mb-4">
                <label htmlFor="work-time" className="block text-sm mb-2">WORK TIME (MIN)</label>
                <input
                    type="number"
                    id="work-time"
                    min="1"
                    max="60"
                    value={workTime}
                    onChange={(e) => setWorkTime(parseInt(e.target.value))}
                    className="w-full bg-black border border-green-700 p-2 rounded text-green-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="short-break" className="block text-sm mb-2">SHORT BREAK (MIN)</label>
                <input
                    type="number"
                    id="short-break"
                    min="1"
                    max="30"
                    value={shortBreak}
                    onChange={(e) => setShortBreak(parseInt(e.target.value))}
                    className="w-full bg-black border border-green-700 p-2 rounded text-green-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="long-break" className="block text-sm mb-2">LONG BREAK (MIN)</label>
                <input
                    type="number"
                    id="long-break"
                    min="1"
                    max="60"
                    value={longBreak}
                    onChange={(e) => setLongBreak(parseInt(e.target.value))}
                    className="w-full bg-black border border-green-700 p-2 rounded text-green-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="sessions-before-long-break" className="block text-sm mb-2">
                    SESSIONS BEFORE LONG BREAK
                </label>
                <input
                    type="number"
                    id="sessions-before-long-break"
                    min="2"
                    max="8"
                    value={sessionsBeforeLongBreak}
                    onChange={(e) => setSessionsBeforeLongBreak(parseInt(e.target.value))}
                    className="w-full bg-black border border-green-700 p-2 rounded text-green-500"
                />
            </div>
            <div className="flex justify-between mt-6">
                <button
                    onClick={handleSave}
                    className="bg-green-800 hover:bg-green-700 text-black px-4 py-2 rounded border-green-500 border-2"
                >
                    SAVE
                </button>
                <button
                    onClick={onClose}
                    className="bg-red-800 hover:bg-red-700 text-black px-4 py-2 rounded border-red-500 border-2"
                >
                    CANCEL
                </button>
            </div>
        </Modal>
    );
};

export default SettingsModal;