import React, { useState, useEffect } from "react"
import css from '../images/css-3.png'
import html from '../images/html-5.png'
import js from '../images/js.png'
import node from '../images/node-js.png'
import Card from "./Card"

import DialogSlide from '../components/Dialog'

 

function Cards() {

    const [items, setItems] = useState([
        { id: 1, img: css, stat: '' },
        { id: 1, img: css, stat: '' },
        { id: 2, img: html, stat: '' },
        { id: 2, img: html, stat: '' },
        { id: 3, img: js, stat: '' },
        { id: 3, img: js, stat: '' },
        { id: 4, img: node, stat: '' },
        { id: 4, img: node, stat: '' },
    ].sort(() => Math.random() - 0.5))

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

    {/*    Game Over Modal   */} 

    useEffect(() => {
        const allCorrect = items.every(item => item.stat === 'correct');
        if (allCorrect) {   
            setTimeout(() => { 
            setShowDialog(true)
            }, 500);
        }
    }, [items]);

    const [showDialog , setShowDialog ] = useState(false)
    

    return (
        <div className="container">
            {items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            ))}


                {showDialog && <DialogSlide/>}
                
        </div>
    )
}

export default Cards