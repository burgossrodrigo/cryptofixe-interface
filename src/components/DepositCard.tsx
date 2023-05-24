import { CardContent, Button, CardActions, Typography, Slider, Chip } from "@mui/material";
import { StyledCard } from ".";
import { AppContext } from "../state";
import { useContext, useState } from "react";
import useFixe from "../methods/useFixe";
import { useWeb3React } from "@web3-react/core";
import { arbitrumProvider, fixeAddress, stakingAddress } from "../constants";
import { formatValue } from "../methods/utils";

const GeneralCard = () => {
    const { state } = useContext(AppContext)
    const { provider } = useWeb3React()
    const { tokenData } = state
    const { balance, allowance } = tokenData
    const [deposit, setDeposit] = useState(0)

    console.log(balance, allowance, 'balance')

    const { approve } = useFixe(provider ?? arbitrumProvider, fixeAddress, window?.ethereum)

    const handleSliderChange = (event: any, value: any) => {
        console.log(value, 'value')
        setDeposit(value)
    }

    const valuetext = (value: number) => {
        return `${value}%`;
    }

    return (
        <>
            <StyledCard elevation={3}>
                <CardContent>
                    <Typography variant="h4">Deposit</Typography>
                </CardContent>
                <CardContent>
                    <Chip size='medium' label={`Total balance: ${Number(balance)}`} />
                    <Chip size='medium' label={`Deposit amount: ${formatValue(deposit, balance)}`} />
                </CardContent>
                <CardContent>
                    <Typography variant="body1">Approve Fixe and stake to start receiving rewards!</Typography>
                </CardContent>
                <CardContent>
                    <Slider
                        aria-label="Small steps"
                        defaultValue={100}
                        getAriaValueText={valuetext}
                        step={1}
                        marks
                        min={1}
                        max={100}
                        valueLabelDisplay="auto"
                        onChange={handleSliderChange}
                    />
                </CardContent>
                <CardActions>
                    <Button variant="contained" onClick={_ => approve(stakingAddress, formatValue(deposit, balance))} size="small">Approve</Button>
                    <Button variant="contained" size="small">Stake</Button>
                </CardActions>
            </StyledCard>
        </>
    )
}

export default GeneralCard
