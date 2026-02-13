import { useState, useEffect } from 'react';
import OpeningScreen from './pages/OpeningScreen';
import MenuScreen from './pages/MenuScreen';
import FeatureScreenShell from './pages/FeatureScreenShell';
import TodoCard from './components/sections/TodoCard';
import NotesCard from './components/sections/NotesCard';
import RemindersCard from './components/sections/RemindersCard';
import BubbleGameCard from './components/sections/BubbleGameCard';
import MusicControl from './components/MusicControl';
import DarkModeToggle from './components/sections/DarkModeToggle';
import { Heart } from 'lucide-react';

type Screen = 'opening' | 'menu' | 'todo' | 'reminder' | 'notes' | 'relax';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('opening');
  const [appIdentifier, setAppIdentifier] = useState('unknown-app');

  useEffect(() => {
    setAppIdentifier(encodeURIComponent(window.location.hostname || 'unknown-app'));
  }, []);

  const navigateToMenu = () => setCurrentScreen('menu');
  const navigateToFeature = (screen: 'todo' | 'reminder' | 'notes' | 'relax') => setCurrentScreen(screen);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Fixed controls in top-right corner */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <MusicControl />
        <DarkModeToggle />
      </div>

      {/* Screen routing */}
      {currentScreen === 'opening' && (
        <OpeningScreen onNext={navigateToMenu} />
      )}

      {currentScreen === 'menu' && (
        <MenuScreen onNavigate={navigateToFeature} />
      )}

      {currentScreen === 'todo' && (
        <FeatureScreenShell title="📝 My To-Do" onBack={navigateToMenu}>
          <TodoCard />
        </FeatureScreenShell>
      )}

      {currentScreen === 'reminder' && (
        <FeatureScreenShell title="⏰ Self Reminder" onBack={navigateToMenu}>
          <RemindersCard />
        </FeatureScreenShell>
      )}

      {currentScreen === 'notes' && (
        <FeatureScreenShell title="📖 My Notes" onBack={navigateToMenu}>
          <NotesCard />
        </FeatureScreenShell>
      )}

      {currentScreen === 'relax' && (
        <FeatureScreenShell title="🎮 Relax Mode" onBack={navigateToMenu}>
          <BubbleGameCard />
        </FeatureScreenShell>
      )}

      {/* Footer - visible on all screens except opening */}
      {currentScreen !== 'opening' && (
        <footer className="fixed bottom-0 left-0 right-0 text-center text-sm text-muted-foreground py-4 bg-background/80 backdrop-blur-sm">
          <p>
            © {new Date().getFullYear()} · Built with{' '}
            <Heart className="inline-block w-4 h-4 text-primary fill-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      )}
    </div>
  );
}

export default App;
