import { useContext, useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Link, Box, TextField, IconButton, Button, Backdrop, Paper } from '@mui/material';
import Example from '../web3/HandleConnection';
import { useWeb3React } from '@web3-react/core';

interface IError {
    error: boolean
    message: string
}

const Header = () => {

    const { account, isActive } = useWeb3React()
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
                <img width={40} onClick={() => window.open('https://cryptofixe.com/')} src="https://cryptofixe.com/assets/big-logo.png" alt="Logo" />
                <Box sx={{ flexGrow: 1, display: 'flex', gap: '4vw', ml: 2 }}>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button style={{'cursor': 'pointer'}} onClick={handleOpen} variant="contained" size='large'>{isActive ? account?.substring(0, 5) + "..." + account?.substring(account?.length - 4) : 'Connect'}</Button>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                    >
                        <Paper elevation={3}>
                            <Example />
                        </Paper>
                    </Backdrop>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

