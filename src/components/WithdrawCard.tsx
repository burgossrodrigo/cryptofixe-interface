import { CardContent, Button, Backdrop, Paper, Chip, CardActions, CardHeader, Typography } from "@mui/material";
import { StyledCard } from ".";
import Example from "../web3/HandleConnection";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";

const WithdrawCard = () => {
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
            <StyledCard elevation={3}>
                <CardContent>
                    <Typography variant="h4">Withdraw</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body1">Click on Withdraw, accept the transaction on your wallet to withdraw your staked Fixe</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small">Withdraw</Button>
                </CardActions>
            </StyledCard>
        </>
    )
}

export default WithdrawCard