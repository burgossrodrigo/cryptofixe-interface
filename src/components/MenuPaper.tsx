import { FC, useState } from "react"
import { ColumnWrapper, StyledPaperMenu } from "."
import { Backdrop, Button, Paper, Typography } from "@mui/material"
import { useWeb3React } from "@web3-react/core"
import Example from "../web3/HandleConnection"
import { Link as RouterLink, useNavigate } from 'react-router-dom';


interface IProps {
    url: string
    title: string
}

const MenuPaper: FC<IProps> = (props) => {
    const { url, title } = props
    const { account, isActive } = useWeb3React();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

  const navigate = useNavigate();
    return (
        <ColumnWrapper gap={20}>
            <StyledPaperMenu width={24} height={20} gap={5} variant="outlined">
                <img src={url} width={100} />
                <Typography variant="h3">{title}</Typography>
            </StyledPaperMenu>
            {
                isActive
                    ?
                    <Button variant="outlined" onClick={() => navigate(`/${title}`)}>{title}</Button>
                    :
                    <Button
                        style={{ cursor: 'pointer' }}
                        onClick={handleOpen}
                        variant="outlined"
                        size="large"
                    >
                        Connect first
                    </Button>
            }
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
                <Paper elevation={3}>
                    <Example />
                </Paper>
            </Backdrop>
        </ColumnWrapper>
    )
}

export default MenuPaper