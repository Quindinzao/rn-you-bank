// External libraries
import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';

// Routes
import Routes from './routes';

// Contexts
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);

  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
