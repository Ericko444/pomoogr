import TerminalLayout from '@/components/layout/TerminalLayout';
import Header from '@/components/ui/Header';
import StatusBar from '@/components/ui/StatusBar';

function App() {
  return (
    <TerminalLayout>
      <Header />
      <div className="flex-grow">
        <p className="text-center my-8">Hello, World!</p>
      </div>
      <StatusBar />
    </TerminalLayout>
  );
}

export default App;