import { Chip, Paper, Typography } from '@mui/material'
import styled from 'styled-components'
import { RowWrapper } from '.'
import useStaking from '../methods/useStaking'
import { useWeb3React } from '@web3-react/core'
import { arbitrumProvider, stakingAddress } from '../constants'
import { IError, IStakeData } from '../interface'
import { useEffect, useState } from 'react'

const PaperWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 10vw;
    width: 100vw;
    height: max-content;
    padding: 4vh;
`

const UserData = () => {

    const { provider } = useWeb3React()
    const { stakersCount, getTotalStaked, getTotalRewardPaid } = useStaking(provider ?? arbitrumProvider, stakingAddress)
    const [ stakerData, setStakerData ] = useState<IStakeData | IError | any>()


    const fetchData = async (): Promise<IStakeData | IError> => {
        try {
            const [rewards, totalStaked, stakers] = await Promise.all([stakersCount(), getTotalStaked(), getTotalRewardPaid()])
            return { rewards, totalStaked, stakers }
        } catch (error: IError | any) {
            return error.message;
        }
    }

    useEffect(() => {
        fetchData().then((res) => setStakerData(res))
    }, [])

    return (<RowWrapper gap="0.5vw">
        <PaperWrapper>
            <Chip size='medium' label='Total rewards:' />
            <Typography variant='h4'>{Number(stakerData?.rewards)}</Typography>
            <Chip size='medium' label='Total value staked:' />
            <Typography variant='h4'>{Number(stakerData?.totalStaked)}</Typography>
            <Chip size='medium' label='Stakers count:' />
            <Typography variant='h4'>{Number(stakerData?.stakers)}</Typography>
        </PaperWrapper>
    </RowWrapper>)
}

export default UserData

{/* <CardContent>
<Chip size='medium' label='Your balance:' />
</CardContent>
<CardContent>
<Chip size='medium' label='Your rewards:' />
</CardContent>
<CardContent>
<Chip size='medium' label='Locked for:' />
</CardContent> */}