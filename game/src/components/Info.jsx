import { Stack, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";


export default function Info() {
    const name = localStorage.getItem('username')
    const levelCount = localStorage.getItem('levelCount')
    const moves = useSelector(state => state.game.moves)
    const infoStyle = {
        width : '220px',
        position: 'absolute',
        right: 10,
        top: 10, 
        borderRadius : '5px',
        backgroundColor : '#4f82b8',
        padding : '12px 10px',
        color : 'white',
    }
    const customButton = {
        color : 'white',
        fontFamily : "Poppins",
        border : 'solid white 1px',
        padding : '3px 5px',
        margin : 1,
        transition : '.5s',
        '&:hover':{
            border : 'solid black 1px',
            color : 'black  '
        }
    }
    return (
        <Stack sx={infoStyle} border={1} direction='column' gap={1}>
            <Typography fontFamily='Poppins' fontSize={30}>Level : {levelCount}</Typography>
            <Typography fontFamily='Poppins'>Name : {name}</Typography>
            <Typography fontFamily='Poppins'>Moves : {moves}</Typography>
            <Stack direction='row' justifyContent='center'> 
                <Button sx={customButton} onClick={()=>window.location.reload()}>Restart</Button>
                <Button sx={customButton} onClick={()=>{
                    window.location.href ='/'
                    localStorage.setItem('levelCount',0)
                    localStorage.setItem('username', null)
                }}>Menu</Button> 
            </Stack>
        </Stack>
    )
}