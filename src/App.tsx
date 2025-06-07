import TerminalLayout from '@/components/layout/TerminalLayout';
import Header from '@/components/ui/Header';
import StatusBar from '@/components/ui/StatusBar';
import PomodoroContainer from './components/features/pomodoro/PomodoroContainer';

function App() {
  return (
    <TerminalLayout>
      <Header />
      <div className="flex-grow py-4">
        <PomodoroContainer />
      </div>
      <StatusBar />
    </TerminalLayout>
  );
}

export default App;