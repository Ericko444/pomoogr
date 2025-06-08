import TerminalLayout from '@/components/layout/TerminalLayout';
import Header from '@/components/ui/Header';
import StatusBar from '@/components/ui/StatusBar';
import PomodoroContainer from '@/components/features/pomodoro/PomodoroContainer';
import ProgressBar from '@/components/ui/ProgressBar';         // Import ProgressBar
import AsciiArtDisplay from '@/components/ui/AsciiArtDisplay'; // Import AsciiArtDisplay
import type { JSX } from 'react';

function App(): JSX.Element {
  // Placeholder data for Sprint 3
  const initialProgress: number = 0; // Or some other static value like 25 for testing
  const initialAsciiArt: string = `   ,_     _,
|\\___//|
|=6   6=|
\\=._Y_.=/
 )  \`  (    ,
/       \\  ((
|         |   ))
/|  .   .  |\\_((
(_|   |   |  |_/
|  .   .  |
|   \\_/   |
\\_/ \\_/_/`;

  return (
    <TerminalLayout>
      <Header />
      <div className="flex-grow py-4 flex flex-col"> {/* Ensure content area can grow and also use flex-col */}
        <PomodoroContainer />
      </div>
      <StatusBar />
    </TerminalLayout>
  );
}

export default App;