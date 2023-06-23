import { CardContent, Button, CardActions, Typography, Slider, Chip, Backdrop, CircularProgress, Card } from "@mui/material";
import { StyledCard } from ".";
import { AppContext } from "../state";
import { useContext, useState } from "react";
import useFixe from "../methods/useFixe";
import { useWeb3React } from "@web3-react/core";
import { arbitrumProvider, fixeAddress, stakingAddress } from "../constants";
import { formatDecimalsTo, formatValue } from "../methods/utils";
import PercentageButtons from "./PercentButton";
import BigNumberInput from "./BigNumberInput";
import useStaking from "../methods/useStaking";
import { IError } from "../interface";

const GeneralCard = () => {
    const { state } = useContext(AppContext);
    const { provider } = useWeb3React();
    const { tokenData } = state;
    const { balance, allowance } = tokenData;
    const [deposit, setDeposit] = useState<string | number>(0);
    const [isLoading, setIsLoading] = useState(false);
    const [transactionHash, setTransactionHash] = useState<string | null | any>(undefined);
    const [open, setOpen] = useState<boolean>(false)

    const { approve } = useFixe(provider ?? arbitrumProvider, fixeAddress, window?.ethereum);
    const { deposit: sendDeposit } = useStaking(provider ?? arbitrumProvider, stakingAddress);

    const handleDepositChange = (newDeposit: number) => {
        setDeposit(newDeposit);
    };

    const handleInoutDepositChange = (newDeposit: number) => {
        setDeposit(newDeposit.toString());
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const isAmountGreaterThanAllowance = Number(deposit) >= Number(allowance) / 10 ** 18;
    const isAmountSmallerThanAllowance = Number(deposit) < Number(allowance) / 10 ** 18;

    const handleApproveClick = async () => {
        setIsLoading(true);
        try {
            const hash = await approve(stakingAddress, Number(deposit))
            setTransactionHash(hash)
            console.log(hash, 'hash')
        } catch (error: any) {
            console.log(error.message, 'for approve');
        } finally {
            setIsLoading(false);
          }
    };

    const handleDepositClick = async () => {
        setIsLoading(true);
        try {
            const hash = await sendDeposit(deposit)
            setTransactionHash(hash)
        } catch (error: any) {
            console.log(error.message, 'for approve');
        } finally {
            setIsLoading(false);
          }
    }

    return (
        <>
            <StyledCard elevation={3}>
                <CardContent>
                    <Typography variant="h3">Deposit</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body1">Approve Fixe and stake to start receiving rewards!</Typography>
                </CardContent>
                <CardContent>
                    <Chip size='medium' label={`Total balance: ${Number(balance).toFixed(2)}`} />
                </CardContent>
                <CardContent>
                    <Chip size='medium' label={`Deposit amount: ${Number(deposit).toFixed(2)}`} />
                </CardContent>
                <CardContent>
                    <PercentageButtons balance={balance} onDepositChange={handleDepositChange} />
                </CardContent>
                <CardContent>
                    <BigNumberInput balance={balance} onDepositChange={handleInoutDepositChange} />
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleApproveClick}
                        size="large"
                        disabled={isAmountSmallerThanAllowance}
                    >
                        Approve
                    </Button>
                    <Button
                        onClick={handleDepositClick}
                        variant="contained"
                        size='large'
                        color="secondary"
                        disabled={isAmountGreaterThanAllowance}
                    >
                        Stake
                    </Button>
                </CardActions>
            </StyledCard>
            {isLoading && (<Backdrop open={isLoading} style={{ zIndex: 9999 }}>
                <CircularProgress color="secondary" />
            </Backdrop>)}

            {transactionHash && (
                <Backdrop open={open} onClick={handleClose} style={{ zIndex: 9999 }}>
                    <Card>
                        <CardContent>
                            <img src="https://cryptofixe.com/assets/big-logo.png" />
                        </CardContent>
                        <CardContent>
                            <Typography onClick={() => window.open(`https://sepolia.etherscan.io/tx/${transactionHash}`)} variant="h6">View you transaction on Etherscan</Typography>
                        </CardContent>
                    </Card>
                </Backdrop>
            )}
        </>
    );
};

export default GeneralCard;
