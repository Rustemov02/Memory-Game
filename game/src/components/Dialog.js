import * as React from 'react';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'


export default function DialogSlide() {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>{"Congratulations! You have matched all the cards correctly."}</DialogTitle>
                {/* <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent> */}
                <DialogActions style={{display : 'flex',flexDirection : 'column',alignItems : 'center',justifyContent : "center"}}>
                    <Button>Reset Level</Button>
                    <Button>Next Level</Button>
                    <Button>Menu</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}