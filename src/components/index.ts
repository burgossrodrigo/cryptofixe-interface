import { CardContent, Card } from "@mui/material";
import styled from "styled-components";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: 0 auto;
`

export const StyledCard = styled(Card)`
width: 80%;
margin: 2vh auto;
height: 50%;
`

export const StyledCardContent = styled(CardContent)`
display: flex;
flex-direction: column;
`

export const RowWrapper = styled.div<{ gap: any }>`
position: relative;
  display: flex;
  flex-direction: row;
  margin: auto auto;
  gap: ${(props: any) => props.gap};
`;

export const ColumnWrapper = styled.div<{ gap: any }>`
position: relative;
  display: flex;
  flex-direction: column;
  gap: ${(props: any) => props.gap};
`;