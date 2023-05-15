import * as React from 'react';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { nextLevel } from '../Redux/store';

export default function DialogSlide() {
    const [open, setOpen] = React.useState(true);
    const count = useSelector(state => state.game.levelCount)
    const moves = useSelector(state => state.game.moves)

    const handleMenuClick = () => {  
        window.location.href = '/'
    };

    return (
        <div>
            <Dialog
                open={open}
            >
                {count === 4 ?
                    (
                        <>
                            <DialogTitle>{"Congratulations! You have completed all the levels."}</DialogTitle>
                            <DialogTitle>{"Thank you for playing. If you\'d like to see more of my work,"}<a style={{ textDecoration: 'none', color: 'blue' }} href='https://github.com/Rustemov02?tab=repositories' target="_blank">click here</a></DialogTitle>
                        </>
                    )
                    :
                    (
                        <Stack direction='column' alignItems='center' justifyContent='center'>
                            <DialogTitle  >{"Congratulations! You have matched all the cards correctly."}</DialogTitle>
                            <DialogTitle sx={{ padding: 0 }}>You got {moves} moves!</DialogTitle>
                        </Stack>
                    )}

                <DialogActions style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}>
                    <Button onClick={() => window.location.reload()}>Reset Level</Button>
                    {count < 4 && <Button component={Link} to={`/level-${count}`}>Next Level</Button>}
                    <Button onClick={handleMenuClick}>Menu</Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}