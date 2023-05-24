import { CardContent, Button, Backdrop, Paper, Chip, CardActions } from "@mui/material";
import { StyledCard } from ".";
import Example from "../web3/HandleConnection";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";

const CollectCard = () => {
  const { account, isActive } = useWeb3React()
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }

    return (
        <>
            <StyledCard>
                <CardContent>
                    <Button onClick={handleOpen} variant="contained" size='large'>{isActive ? account?.substring(0, 5) + "..." + account?.substring(account?.length - 4) : 'Connect'}</Button>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                    >
                        <Paper elevation={3}>
                            <Example />
                        </Paper>
                    </Backdrop>
                </CardContent>
                <CardContent>
                    <Chip size='medium' label='Your balance:' />
                </CardContent>
                <CardContent>
                    <Chip size='medium' label='Your rewards:' />
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small">Collect</Button>
                </CardActions>
            </StyledCard>
        </>
    )
}

export default CollectCard