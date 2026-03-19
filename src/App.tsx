import { Toaster } from 'sonner';
import { Home } from '@/pages/Home';
import { useTheme } from '@/hooks/use-theme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Home theme={theme} onThemeToggle={toggleTheme} />
      <Toaster richColors theme={theme} position="top-right" />
    </>
  );
}

export default App;
