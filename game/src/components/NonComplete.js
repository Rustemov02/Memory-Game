import { Paper, Stack, Button } from '@mui/material'
import React from 'react'

export default function NonComplete(){
    const style = {
        padding : '12px 10px',
        display : 'flex',
        flexDirection : 'column',
        alignItems :'center',
        justifyContent : 'center', 
        gap : 3
    }

    return(
        <Stack sx={style}>
            <Paper elevation={10} sx={{
                padding : '12px 10px',
                fontSize : '30px'
            }}>You need to complete the previous levels</Paper>
            <Button sx={{fontSize : 20}} onClick={()=>window.location.href = '/'}>Main Page</Button>
        </Stack>
    )
}