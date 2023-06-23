import { useContext, useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Link, Box, TextField, IconButton, Button, Backdrop, Paper } from '@mui/material';
import Example from '../web3/HandleConnection';
import { useWeb3React } from '@web3-react/core';
import RandomIcon from './RandomIcon';
import { AccountCircle } from '@mui/icons-material';
import { AppContext } from '../state';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { RowWrapper, StyledHeader, StyledIcon } from './';
import { setTheme } from '../state/actions';

interface IError {
  error: boolean;
  message: string;
}

const Header = () => {
  const { account, isActive } = useWeb3React();
  const { state, dispatch } = useContext(AppContext)
  const { theme } = state
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const toogleTheme = () => {
    setTheme(dispatch, theme === 'light' ? 'dark' : 'light')
  }

  return (
    <StyledHeader>
      <img
        width={200}
        onClick={() => window.open('https://cryptofixe.com/')}
        src="https://cryptofixe.com/assets/cryptofixe.png"
        alt="Logo"
      />
      <RowWrapper gap={1}>
        <StyledIcon onClick={() => toogleTheme()} width={40} src={theme === 'light' ? `${process.env.PUBLIC_URL}/images/sol.png` : `${process.env.PUBLIC_URL}/images/lua.png`} />
        <Button
          style={{ cursor: 'pointer' }}
          onClick={handleOpen}
          variant="contained"
          size="large"
          startIcon={<img width={24} src={`${process.env.PUBLIC_URL}/images/wallet.png`} />} // Use RandomIcon or AccountCircle as startIcon
        >
          {isActive ? account?.substring(0, 5) + '...' + account?.substring(account?.length - 4) : 'Connect'}
        </Button>
      </RowWrapper>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
        <Paper elevation={3}>
          <Example />
        </Paper>
      </Backdrop>
    </StyledHeader>
  );
};

export default Header;
