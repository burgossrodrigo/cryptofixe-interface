import { createTheme, ThemeProvider } from '@mui/material';
import { PageWrapper, RowWrapper } from './components';
import SubHeader from './components/SubHeader'
import Header from './components/Header';
import UserData from './components/UserData';
import CollectCard from './components/ColllectCard';
import WithdrawCard from './components/WithdrawCard';
import DepositCard from './components/DepositCard';





function App() {

  const theme = createTheme({
    typography: {
      fontFamily: ['Helvetica, Arial, sans-serif'].join(','),
      body1: {
        color: '#000000', // black
      },
      body2: {
        color: '#212121', // dark gray
      },
      h1: {
        color: '#000000', // black
        fontSize: '48px',
      },
      h2: {
        color: '#000000', // black
        fontSize: '40px',
      },
      h3: {
        color: '#000000', // black
        fontSize: '32px',
      },
      h4: {
        color: '#000000', // black
        fontSize: '24px',
      },
      h5: {
        color: '#000000', // black
        fontSize: '18px',
      },
      h6: {
        color: '#000000', // black
        fontSize: '16px',
      },
    },
    palette: {
      mode: 'light',
      background: {
        paper: '#FFFFFF', // white
        default: '#F5F5F5', // light gray
      },
      primary: {
        main: '#2E3192', // primary color
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


  return (<>
    <ThemeProvider theme={theme}>
      <SubHeader />
      <Header />
      <PageWrapper>
        <UserData />
        <RowWrapper gap="2vw">
          <DepositCard />
          <CollectCard />
          <WithdrawCard />
        </RowWrapper>
      </PageWrapper>
    </ThemeProvider>
  </>);
}

export default App;
