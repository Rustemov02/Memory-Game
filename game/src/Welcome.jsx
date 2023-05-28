import React, { useEffect, useState } from 'react'
import { Stack, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Welcome() {

    const [value, setValue] = useState('')
    const [isActive, setIsActive] = useState(true)
    const styles = {
        cardStyle: {
            fontFamily: 'Poppins',
            fontWeight: 800,
            fontSize: "25px",
            padding: '3px 30px'
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
        if (value.trim() == '') {
            setIsActive(true)
        } else {
            setIsActive(false)
            localStorage.setItem('levelCount',1)
        }
    }, [value])

    return (
        <Stack bgcolor='#153659' height='100vh' direction="column" alignItems='center' justifyContent='center' gap={4}>
            <Typography style={{ fontFamily: 'Poppins', borderRadius: '2px', padding: '12px 10px', color: '#f8f9fa', fontSize: '35px' }}>Welcome Memory Card Game</Typography>
            <Box sx={styles.inputBox}>
                <input type='text' name="user_name" placeholder="Username" className="input" value={value} onChange={(e) => {
                    const inputValue = e.target.value
                    localStorage.setItem('username', inputValue)
                    setValue(inputValue)
                }} />
            </Box>
            <Button variant='contained' disabled={isActive} style={styles.cardStyle} component={Link} to='level-1'>Start</Button>
        </Stack>
    )
}