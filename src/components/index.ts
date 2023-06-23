import { CardContent, Card } from "@mui/material";
import styled from "styled-components";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: 0 auto;
`

export const StyledCard = styled(Card)`
width: 60%;
margin: 5vh auto;
height: 50%;
`

export const StyledCardContent = styled(CardContent)`
display: flex;
flex-direction: column;
@media (max-width: 768px) {
  flex-direction: column;
  width: 80vw;
}
`

export const RowWrapper = styled.div<{ gap: any }>`
position: relative;
  display: flex;
  flex-direction: row;
  margin: auto auto;
  gap: ${(props: any) => props.gap}vw;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ColumnWrapper = styled.div<{ gap: any }>`
position: relative;
  display: flex;
  flex-direction: column;
  gap: ${(props: any) => props.gap};
`;

export const StyledPaperMenu = styled(Card) <{ gap: any, width: any, height: any }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1vw;
  width: ${(props: any) => props.width}vw;
  height: ${(props: any) => props.height}vh;
  gap: ${(props: any) => props.gap}vw;
`

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 18vw;
    width: max-content;
    margin: auto auto;
    margin-top: 2vh;
`

export const StyledIcon = styled.img`
  cursor: pointer;
`

