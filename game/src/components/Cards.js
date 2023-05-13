import React, { useState, useEffect } from "react"
import { Box, Typography } from '@mui/material'
import css from '../images/css-3.png'
import html from '../images/html-5.png'
import js from '../images/js.png'
import node from '../images/node-js.png'
import Card from "./Card"


 

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

    useEffect(() => {
        const allCorrect = items.every(item => item.stat === 'correct');
        if (allCorrect) {
            setTimeout(() => {
              alert('Congrats !')
            }, 500);
        }
    }, [items]);

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

    // birinci kartla ikinci kartin eyniliyini yoxla...(id-e gore)
    function check(current) {
        const allCorrect = items.every(item => item.stat === 'correct');


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




    return (
        <div className="container">
            {items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            ))}
        </div>
    )
}

export default Cards