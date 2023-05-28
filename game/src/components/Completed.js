import { Button, Stack } from '@mui/material'
import React from 'react'


export default function Completed() {

    const username = localStorage.getItem('username')

    return (
        <Stack direction='column' justifyContent='center' alignItems='center' gap={3} >
            <Stack bgcolor={'white'} alignItems='center' justifyContent='center' 
            sx={{
                padding : '20px 32px',
                borderRadius : 5,
                boxShadow : '1px 0px 20px 5px #6666af',
                fontSize : 27,
                fontFamily : 'Poppins'
            }}>
                <div>{`Congratulations ${username}! You have completed all the levels.`}</div>
                <div>{"Thank you for playing. If you\'d like to see more of my work,"}<a style={{ textDecoration: 'none', color: 'blue' }} href='https://github.com/Rustemov02?tab=repositories' target="_blank">click here</a></div>
            </Stack>
            <Button size='large' variant='contained' sx={{padding : '8px 20px'}} onClick={()=>{
                localStorage.setItem('username',null)
                localStorage.setItem('levelCount',0)
                window.location.href = '/'
            }}>Main Menu</Button>
        </Stack>
    )
}