import { CardContent, Button, Backdrop, Paper, Chip, CardActions, CardHeader, Typography, Slider } from "@mui/material";
import { StyledCard } from ".";
import ethers from 'ethers'
import { useWeb3React } from "@web3-react/core";
import { useContext, useEffect, useState } from "react";
import PercentageButtons from "./PercentButton";
import { arbitrumProvider, stakingAddress } from "../constants";
import useStaking from "../methods/useStaking";
import { AppContext } from "../state";
import { IError, IStaker } from "../interface";
import { formatDecimalsFrom, formatDecimalsTo } from "../methods/utils";

const CollectCard = () => {
    const { account, isActive, provider } = useWeb3React()
    const { state } = useContext(AppContext)
    const { blockNumber } = state
    const [open, setOpen] = useState(false)
    const [deposit, setDeposit] = useState<string | number>(0)
    const [rewards, setRewards] = useState<number>()

    const { getReward, collect } = useStaking(provider ?? arbitrumProvider, stakingAddress)

    useEffect(() => {
        if (account) {
            getReward(account).then((res: IStaker | IError | any) => {
                console.log(res, 'getReward')
                setRewards(Number(formatDecimalsFrom(res)))
            })
        }
    }, [blockNumber, account])

    const handleDepositChange = (newDeposit: number) => {
        setDeposit(newDeposit);
    };


    const handleSliderChange = (event: any, value: any) => {
        console.log(value, 'value')
        setDeposit((value / 100) * Number(rewards))
    }

    const valuetext = (value: number) => {
        return `${value}%`;
    }

    const _collect = () => {
        console.log(deposit, 'deposit')
        collect(Number(deposit))
    }

    return (
        <>
            <StyledCard elevation={3}>
                <CardContent>
                    <Typography variant="h4">Collect</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body1">Click on Collect, approve the transaction on your wallet to receive your rewards</Typography>
                </CardContent>
                <CardContent>
                    <Chip size='medium' label={`Total rewards: ${Number(rewards).toFixed(2)}`} />
                </CardContent>
                <CardContent>
                    <Chip size='medium' label={`Deposit amount: ${Number(deposit).toFixed(2)}`} />
                </CardContent>
                <CardContent>
                    <PercentageButtons balance={rewards} onDepositChange={handleDepositChange} />
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
                    <Button variant="contained" size="large" color="secondary" onClick={() => _collect()}>Collect</Button>
                </CardActions>
            </StyledCard>
        </>
    )
}

export default CollectCard