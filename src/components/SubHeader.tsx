import { useContext, useEffect, useState } from 'react'
import { Stack, Chip } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core';
import { arbitrumProvider, fixeAddress, stakingAddress, wssArbitrumProvider } from '../constants';
import { IStakeData, IError } from '../interface';
import useStaking from '../methods/useStaking';
import { AppContext } from '../state';
import { setBlocknumber, setStakeData, setTokenData } from '../state/actions';
import useFixe from '../methods/useFixe';


const HeadWrapper = styled.div`
display: flex;
flex-direction: row;
width: 100%;
gap: 2vw;
height: max-content;
`

const StyledSpan = styled.span`
    margin: auto auto;
`

const SubHeader = () => {
    const { state, dispatch } = useContext(AppContext)
    const { blockNumber } = state
    const { provider, account } = useWeb3React()
    const { stakersCount, getTotalStaked, getTotalRewardPaid } = useStaking(provider ?? arbitrumProvider, stakingAddress)
    const { getAllowance, balanceOf } = useFixe(provider ?? arbitrumProvider, fixeAddress, undefined)


    const fetchStakeData = async (): Promise<IStakeData | IError> => {
        try {
            const [
                rewards,
                totalStaked,
                stakers,
            ] = await Promise.all([
                stakersCount(),
                getTotalStaked(),
                getTotalRewardPaid()
            ])
            return { rewards, totalStaked, stakers }
        } catch (error: IError | any) {
            return error.message;
        }
    }

    const fetchTokenData = async () => {
        try {
            const [allowance, balance] = await Promise.all([
                getAllowance(account, stakingAddress),
                balanceOf(account)
            ]);
            return { allowance, balance };
        } catch (error: any) {
            return error.message;
        }
    };

    useEffect(() => {
        if (account !== undefined) {
            fetchStakeData().then((res) => setStakeData(dispatch, res))
            fetchTokenData().then((res) => {
                console.log(res, 'res')
                setTokenData(dispatch, res)
            })
        }
    }, [account, blockNumber])

    const useOnBlockUpdated = (callback: (blockNumber: number) => void) => {
        const { provider } = useWeb3React()
        useEffect(() => {
            if (!provider) {
                return
            }
            const subscription = provider?.on('block', callback)
            return () => {
                subscription?.removeAllListeners()
            }
        })
    }

    useOnBlockUpdated((blockNumber: number) => {
        setBlocknumber(dispatch, blockNumber)
        console.log(blockNumber, 'blockNumber')
    })

    return (
        <HeadWrapper>
            <Stack direction="row" spacing={1}>
                <StyledSpan><Chip onDelete={_ => { }} deleteIcon={<FiberManualRecordIcon color='success' />} label={`Latest synced block ${blockNumber ?? 'Connect wallet'}`} /></StyledSpan>
            </Stack>
        </HeadWrapper>
    )
}

export default SubHeader;