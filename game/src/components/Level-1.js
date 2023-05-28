import React, { useState, useEffect } from "react"
import Card from "./Card"
import DialogSlide from './Dialog'
import { useDispatch, useSelector } from 'react-redux'
import { nextLevel, increasaMove, resetMoves } from "../Redux/store"

import images from './Level1.data'
import { Stack } from "@mui/material"
import Info from './Info'

function Level1() {
    const dispatch = useDispatch()

    const [items, setItems] = useState(images)
    const [prev, setPrev] = useState(-1) //previous
    
    function handleClick(id) {
        items[id].stat = 'active'
        setItems(items)

        if (prev === -1) {
            setPrev(id)
        } else {
            check(id)
        }
    }

    function check(current) {

        dispatch(increasaMove())


        if (current === prev) {
            return;
        }

        if (items[current].id === items[prev].id) {
            items[current].stat = 'correct';
            items[prev].stat = 'correct';
            setItems([...items]);
            setPrev(-1);
        } else {
            items[current].stat = 'wrong';
            items[prev].stat = 'wrong';
            setItems([...items]);
            setTimeout(() => {
                items[current].stat = '';
                items[prev].stat = '';
                setPrev(-1);
            }, 1000);
        }   
        setTimeout(() => {
            setPrev(-1);
        }, 5000);       

    }

    {/*    Game Over Modal   */ }

    useEffect(() => {

        if (items[0].stat === 'active') {
            console.log('active')
        }

        const allCorrect = items.every(item => item.stat === 'correct');

        if (allCorrect) {
            localStorage.setItem('levelCount', 2)
            setTimeout(() => {
                setShowDialog(true)
            }, 500);
        }
    }, [items]);

    const [showDialog, setShowDialog] = useState(false)
 
    return (
        <Stack direction='row' alignItems='center'>
            <Info />
            <div className="container">
                {items.map((item, index) => (
                    <Card key={index} item={item} id={index} handleClick={handleClick} />
                ))}
            </div>
            {showDialog && <DialogSlide />}
            
            <Info />
        </Stack>

    )
}

export default Level1