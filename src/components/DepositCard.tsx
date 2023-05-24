import { CardContent, Button, Backdrop, Paper, Chip, CardActions, CardHeader, Typography } from "@mui/material";
import { StyledCard } from ".";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";

const GeneralCard = () => {
    return (
        <>
            <StyledCard elevation={3}>
                <CardContent>
                    <Typography variant="h4">Deposit</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body1">Approve Fixe and stake to start receiving rewards!</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small">Approve</Button>
                    <Button variant="contained" size="small">Stake</Button>
                </CardActions>
            </StyledCard>
        </>
    )
}

export default GeneralCard