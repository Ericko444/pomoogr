import { useState, useEffect, useCallback, type JSX } from 'react';
import TerminalLayout from '@/components/layout/TerminalLayout';
import Header from '@/components/ui/Header';
import StatusBar from '@/components/ui/StatusBar'; // Assuming StatusBar still gets its own status or a prop
import PomodoroContainer from '@/components/features/pomodoro/PomodoroContainer';
import SettingsModal from '@/components/features/settings/SettingsModal';
import HelpModal from '@/components/features/help/HelpModal';
import type { PomodoroSettings } from '@/types/pomodoro';

const DEFAULT_SETTINGS: PomodoroSettings = {
  workTime: 25,
  shortBreak: 5,
  longBreak: 15,
  sessionsBeforeLongBreak: 4,
  soundEnabled: true,
};

function App(): JSX.Element {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState<boolean>(false);
  const [appSettings, setAppSettings] = useState<PomodoroSettings>(() => {
    const savedSettings = localStorage.getItem('pomodoroSettings');
    return savedSettings ? JSON.parse(savedSettings) : DEFAULT_SETTINGS;
  });
  const [appStatusMessage, setAppStatusMessage] = useState<string>("SYSTEM OPERATIONAL");


  const handleSaveSettings = (newSettings: PomodoroSettings) => {
    setAppSettings(newSettings);
    localStorage.setItem('pomodoroSettings', JSON.stringify(newSettings));
    setAppStatusMessage("SETTINGS SAVED. SYSTEM UPDATED.");
  };

  // Keyboard shortcuts for modals
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'F1' || e.key === 'f1') {
      e.preventDefault();
      setIsHelpModalOpen(prev => !prev);
      setIsSettingsModalOpen(false); // Close other modal
    } else if (e.key === 'F2' || e.key === 'f2') {
      e.preventDefault();
      setIsSettingsModalOpen(prev => !prev);
      setIsHelpModalOpen(false); // Close other modal
    } else if (e.key === 'Escape') {
      setIsSettingsModalOpen(false);
      setIsHelpModalOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <TerminalLayout>
        <Header />
        <div className="flex-grow py-4 flex flex-col">
          <PomodoroContainer
            initialSettings={appSettings}
            onStatusUpdate={setAppStatusMessage}
          />
        </div>
        <StatusBar statusMessage={appStatusMessage} />
      </TerminalLayout>

      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => {
          setIsSettingsModalOpen(false);
          setAppStatusMessage("SETTINGS VIEW CANCELLED.");
        }}
        currentSettings={appSettings}
        onSave={handleSaveSettings}
      />
      <HelpModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
      />
    </>
  );
}

export default App;