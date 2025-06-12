import TerminalLayout from '@/components/layout/TerminalLayout';
import Header from '@/components/ui/Header';
import StatusBar from '@/components/ui/StatusBar';
import PomodoroContainer from '@/components/features/pomodoro/PomodoroContainer';
import type { JSX } from 'react';

function App(): JSX.Element {
  return (
    <TerminalLayout>
      <Header />
      <div className="flex-grow py-4 flex flex-col">
        <PomodoroContainer /> {/* PomodoroContainer now handles its sub-components like ProgressBar and AsciiArt */}
      </div>
      <StatusBar /> {/* StatusBar has its own internal logic for time and a generic status */}
    </TerminalLayout>
  );
}

export default App;