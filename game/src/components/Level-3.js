import React, { useState, useEffect } from "react"
import Card from "./Card" 
import images from '../components/Level3.data'
import { useDispatch } from "react-redux"
import { resetMoves , increasaMove} from "../Redux/store"
import Info from "./Info"
import Completed from "./Completed"


function Level3() {

    const dispatch = useDispatch() 
    const [items, setItems] = useState(images)
    const [prev, setPrev] = useState(-1) //previous
    const [completed, setCompleted] = useState(false)
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
    }

    useEffect(() => {
        dispatch(resetMoves())
    }, [])

    {/*    Game Over Modal   */ }
    useEffect(() => {
        const allCorrect = items.every(item => item.stat === 'correct');
        if (allCorrect) {
            setTimeout(() => {
                setCompleted(true)
                setShowDialog(true)
            }, 500);
        }
    }, [items]);

    const [showDialog, setShowDialog] = useState(false)
    return (
        <>
            {!showDialog ? (<div className="container level_3">
                {items.map((item, index) => (
                    <Card key={index} item={item} id={index} handleClick={handleClick} />
                ))}
                <Info />
            </div>) : (<Completed />)} 
        </>
    )
}

export default Level3