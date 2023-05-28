import * as React from 'react';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogTitle, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


export default function DialogSlide() {
    const open = true
    const count = localStorage.getItem('levelCount')
    const moves = useSelector(state => state.game.moves)
    const handleMenuClick = () => {
        localStorage.setItem('username', null)
        localStorage.setItem('levelCount', 0)
        window.location.href = '/'
    };

    return (
        <div>
            <Dialog
                open={open}
            >
                {count === 10 ?
                    ''
                    :
                    (
                        <Stack direction='column' alignItems='center' justifyContent='center'>
                            <DialogTitle  >{"Congratulations! You have matched all the cards correctly."}</DialogTitle>
                            {count !== 10 && <DialogTitle sx={{ padding: 0 }}>You got {moves} moves!</DialogTitle>}
                        </Stack>
                    )}

                <DialogActions style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}>
                    <Button onClick={() => {
                        if (localStorage.getItem('levelCount') == 2) {
                            localStorage.setItem('levelCount', 1)
                        } else if (localStorage.getItem('levelCount') == 3) {
                            localStorage.setItem('levelCount', 2)
                        }
                        window.location.reload()

                    }}>Reset Level</Button>
                    {count !== 10 && <Button component={Link} to={`/level-${count}`}>Next Level</Button>}
                    <Button onClick={handleMenuClick}>Menu</Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}