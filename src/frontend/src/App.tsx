import { useState, useEffect } from 'react';
import OpeningScreen from './pages/OpeningScreen';
import MenuScreen from './pages/MenuScreen';
import FeatureScreenShell from './pages/FeatureScreenShell';
import TodoCard from './components/sections/TodoCard';
import NotesCard from './components/sections/NotesCard';
import RemindersCard from './components/sections/RemindersCard';
import BubbleGameCard from './components/sections/BubbleGameCard';
import DailyQuoteCard from './components/sections/DailyQuoteCard';
import MusicControl from './components/MusicControl';
import DarkModeToggle from './components/sections/DarkModeToggle';
import { Heart } from 'lucide-react';

type Screen = 'opening' | 'menu' | 'todo' | 'reminder' | 'notes' | 'relax' | 'quote';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('opening');
  const [appIdentifier, setAppIdentifier] = useState('unknown-app');

  useEffect(() => {
    setAppIdentifier(encodeURIComponent(window.location.hostname || 'unknown-app'));
  }, []);

  const navigateToMenu = () => setCurrentScreen('menu');
  const navigateToFeature = (screen: 'todo' | 'reminder' | 'notes' | 'relax' | 'quote') => setCurrentScreen(screen);

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Fixed controls in top-right corner */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <MusicControl />
        <DarkModeToggle />
      </div>

      {/* Section-based navigation - only one section visible at a time */}
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

      {currentScreen === 'quote' && (
        <FeatureScreenShell title="✨ Daily Quote" onBack={navigateToMenu}>
          <DailyQuoteCard />
        </FeatureScreenShell>
      )}

      {/* Footer - visible on all screens except opening */}
      {currentScreen !== 'opening' && (
        <footer className="fixed bottom-0 left-0 right-0 text-center text-sm py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-gray-700 dark:text-gray-300">
          <p>
            © {new Date().getFullYear()} · Built with{' '}
            <Heart className="inline-block w-4 h-4 text-pink-500 fill-pink-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline font-medium"
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
