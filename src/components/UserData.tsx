import { Chip, Typography } from '@mui/material'
import styled from 'styled-components'
import { ColumnWrapper, RowWrapper } from '.'
import { useContext } from 'react'
import { AppContext } from '../state'

const PaperWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 10vw;
    width: 70vw;
    height: max-content;
    padding: 4vh;
    margin: 2vh auto;
    @media (max-width: 768px) {
    flex-direction: column;
    width: 70vw
  }
`


const UserData = () => {

    const { state } = useContext(AppContext)
    const { stakeData } = state

    return (<RowWrapper gap={1}>
      <PaperWrapper>
        <ColumnWrapper gap={'1vh'}>
          <Chip size="medium" label="Total rewards:" />
          <Typography color="primary" variant="h2">
            {Number(Number(stakeData?.rewards) / (10 ** 18)).toFixed(2)}
          </Typography>
        </ColumnWrapper>
        <ColumnWrapper gap={'1vh'}>
          <Chip size="medium" label="Total value staked:" />
          <Typography color="primary" variant="h2">
            {Number(Number(stakeData?.totalStaked) / 10 ** 18).toFixed(2)}
          </Typography>
        </ColumnWrapper>
        <ColumnWrapper gap={'1vh'}>
          <Chip size="medium" label="Stakers count:" />
          <Typography color="primary" variant="h2">{Number(stakeData?.stakers)}</Typography>
        </ColumnWrapper>
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