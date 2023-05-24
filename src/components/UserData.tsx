import { Chip, Paper, Typography } from '@mui/material'
import styled from 'styled-components'
import { RowWrapper } from '.'
import useStaking from '../methods/useStaking'
import { useWeb3React } from '@web3-react/core'
import { arbitrumProvider, stakingAddress } from '../constants'
import { IError, IStakeData } from '../interface'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../state'
import { setStakeData } from '../state/actions'

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

    const { state } = useContext(AppContext)
    const { stakeData } = state

    return (<RowWrapper gap="0.5vw">
        <PaperWrapper>
            <Chip size='medium' label='Total rewards:' />
            <Typography variant='h4'>{Number(stakeData?.rewards)}</Typography>
            <Chip size='medium' label='Total value staked:' />
            <Typography variant='h4'>{Number(stakeData?.totalStaked)}</Typography>
            <Chip size='medium' label='Stakers count:' />
            <Typography variant='h4'>{Number(stakeData?.stakers)}</Typography>
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