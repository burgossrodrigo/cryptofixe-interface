import { useEffect, useState } from 'react'
import { Stack, Chip } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core';


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
    const [blockNumber, setBlockNumber] = useState<number>(0)

    const useOnBlockUpdated = (callback: (blockNumber: number) => void) => {
        const { provider } = useWeb3React()
        useEffect(() => {
            if (!provider) {
                return
            }
            const subscription = provider.on('block', callback)
            return () => {
                subscription.removeAllListeners()
            }
        })
    }

    useOnBlockUpdated((blockNumber: number) => {
        setBlockNumber(blockNumber)
        console.log(blockNumber)
    })

    return (
        <HeadWrapper>
                <Stack direction="row" spacing={1}>
                    <StyledSpan><Chip onDelete={_ => { }} deleteIcon={<FiberManualRecordIcon color='success' />} label={`Latest synced block ${blockNumber}`} /></StyledSpan>
                </Stack>
        </HeadWrapper>
    )
}

export default SubHeader;