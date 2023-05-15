import { Stack, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useSelector , useDispatch} from "react-redux";
import { getUserName } from "../Redux/store";


export default function Info() {
    const dispatch = useDispatch()
    const name = useSelector(state => state.game.username)
    const moves = useSelector(state => state.game.moves)
    const levelCount = useSelector(state => state.game.levelCount)

    const [prevName , setPrevName] = useState(name)
    const infoStyle = {
        width : '220px',
        position: 'absolute',
        right: 10,
        top: 60, 
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
        <Stack sx={infoStyle} border={1} direction='column'>
            <Typography fontFamily='Poppins'>Name : {name}</Typography>
            <Typography fontFamily='Poppins'>Moves : {moves}</Typography>
            <Typography fontFamily='Poppins'>Level : {levelCount}</Typography>
            {/* <Stack direction='row' >  */}
                <Button sx={customButton}>Menu</Button>
            {/* </Stack> */}
        </Stack>
    )
}