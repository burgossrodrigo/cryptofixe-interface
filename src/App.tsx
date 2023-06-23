import { createTheme, ThemeProvider } from '@mui/material';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Deposit from './pages/Deposit';
import Collect from './pages/Collect';
import Withdraw from './pages/Withdraw';
import { createGlobalStyle } from 'styled-components';
import { useContext } from 'react';
import { AppContext } from './state';

function App() {

  const { state } = useContext(AppContext)
  const { theme } = state

  const lightTheme = createTheme({
    typography: {
      fontFamily: ['Helvetica, Arial, sans-serif'].join(','),
      body1: {
        color: '#000000', // black
      },
      body2: {
        color: '#000000', // black
      },
      // ...rest of the typography styles
    },
    palette: {
      mode: 'light',
      background: {
        paper: '#FFFFFF', // white
        default: '#F5F5F5', // light gray
      },
      primary: {
        main: '#2E3192', // primary color EB4B98
        contrastText: '#FFFFFF', // white
      },
      secondary: {
        main: '#EB4B98', // secondary color
        contrastText: '#000000', // black
      },
      success: {
        main: '#4CAF50',
        dark: '#388E3C',
        contrastText: '#FFFFFF',
        light: '#81C784',
      },
    },
  });
  
  const darkTheme = createTheme({
    typography: {
      fontFamily: ['Helvetica, Arial, sans-serif'].join(','),
      body1: {
        color: '#FFFFFF', // white
      },
      body2: {
        color: '#FFFFFF', // white
      },
      // ...rest of the typography styles
    },
    palette: {
      mode: 'dark',
      background: {
        paper: '#212121', // dark gray
        default: '#303030', // slightly lighter dark gray
      },
      primary: {
        main: '#EB4B98', // primary color
        contrastText: '#FFFFFF', // white
      },
      secondary: {
        main: '#2E3192', // secondary color
        contrastText: '#FFFFFF', // white
      },
      success: {
        main: '#4CAF50',
        dark: '#388E3C',
        contrastText: '#FFFFFF', // white
        light: '#81C784',
      },
    },
  });
  
  

  const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background: ${theme === 'dark' ? '#000000' : '#FFFFFF'};
  width: 100%
}
`;


  return (<>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:collect" element={<Collect />} />
          <Route path="/:withdraw" element={<Withdraw />} />
          <Route path="/:deposit" element={<Deposit />} />

          {/* <Route path="/:chain/Pools/" element={<Pools />} />
            <Route path="/:chain/Pools/:poolAddress" element={<PoolPage />} />
            <Route path="/:chain/Tokens" element={<Tokens />} />
            <Route path="/:chain/Tokens/:tokenAddress" element={<TokenPage />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>);
}

export default App;
