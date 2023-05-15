import React, { useEffect, useState } from 'react'
import { Stack, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { getUserName } from './Redux/store'
import { useDispatch, useSelector } from 'react-redux'

export default function Welcome() {
    const dispatch = useDispatch()
    const username = useSelector(state => state.game.username)

    const [value, setValue] = useState('')
    const [active , setActive] = useState(true)
    const styles = {
        cardStyle: {
            fontFamily: 'Poppins',
            fontWeight: 800,
            fontSize: "25px",
            padding: '3px 30px',
            color: 'white',
            backgroundColor: "blue"
        },
        inputBox: {
            padding: '18px',
            border: 'solid #2C2C6C 2px',
            borderRadius: '12px',
            width: 350,
            border: 'solid white 1px'
        }
    }

    useEffect(() => {
        // console.log(username)
        if(username < 2 || username.trim() === ''){
            console.log('nulllll') 
            setActive(true)
        }else{
            // console.log('looolll')
            setActive(false)
        }
    }, [value])

    return (
        <Stack bgcolor='#153659' height='100vh' direction="column" alignItems='center' justifyContent='center' gap={4}>
            <Typography style={{ fontFamily: 'Poppins', borderRadius: '2px', padding: '12px 10px', color: '#f8f9fa', fontSize: '35px' }}>Welcome Memory Card Game</Typography>
            <Box sx={styles.inputBox}>
                <input type='text' name="user_name" placeholder="Username" className="input" value={value} onChange={(e) => {
                    dispatch(getUserName(value))
                    setValue(e.target.value)
                }} />
            </Box>
            <Button disabled={username == null ? true : false } style={styles.cardStyle} component={Link} to='level-1'>Start</Button>
        </Stack>
    )
}