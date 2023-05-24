import { CardContent, Card } from "@mui/material";
import styled from "styled-components";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledCard = styled(Card)`
width: 80%;
margin: 10% auto;
height: 50%;
`

export const StyledCardContent = styled(CardContent)`
display: flex;
flex-direction: column;
`