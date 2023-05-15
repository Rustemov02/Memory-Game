import React, { useState, useEffect } from "react"
import Card from "./Card"
import DialogSlide from './Dialog'


import images from '../components/Level3.data'
import { useDispatch, useSelector } from "react-redux"
import { nextLevel } from "../Redux/store"
import Info from "./Info"
import NonComplete from "./NonComplete"


function Level3() {

    const dispatch = useDispatch()
    const levelCount = useSelector(state => state.game.levelCount)

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

    {/*    Game Over Modal   */ }

    useEffect(() => {
        const allCorrect = items.every(item => item.stat === 'correct');
        if (allCorrect) {
            setTimeout(() => {
                dispatch(nextLevel(4))
                setShowDialog(true)
            }, 500);
        }
    }, [items]);

    const [showDialog, setShowDialog] = useState(false)


    return (
        <>
            {levelCount === 2 ? (
                <div className="container">
                    {items.map((item, index) => (
                        <Card key={index} item={item} id={index} handleClick={handleClick} />
                    ))}
                    {showDialog && <DialogSlide />}
                    <Info />
                </div>
            ) : <NonComplete />}
        </>
    )
}

export default Level3