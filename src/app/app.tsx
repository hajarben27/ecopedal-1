// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeProvider } from '@mui/material';
import styles from './app.module.scss';
import { theme } from './theme';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
