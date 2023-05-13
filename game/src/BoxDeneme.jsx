import React, { useState } from "react";
import car from './images/car.png'
import banana from './images/banana.png'
import plane from './images/plane.png'

import "./Box.css";
import arrayShuffle from 'array-shuffle'

export default function BoxDeneme() {

    // const [shuffledBoxes, setShuffledBoxes] = useState(arrayShuffle([...boxes, ...boxes]));

    const boxes = [
        {
            img: car,
            name: 'car',
            id: 1,
            isFlipped: false
        },
        {
            img: car,
            name: 'car',
            id: 2,
            isFlipped: false
        },
        {
            img: banana,
            name: 'banana',
            id: 3,
            isFlipped: false
        },
        {
            img: banana,
            name: 'banana',
            id: 4,
            isFlipped: false
        },
        {
            img: plane,
            name: 'plane',
            id: 5,
            isFlipped: false
        },
        {
            img: plane,
            name: 'plane',
            id: 6,
            isFlipped: false
        }
    ]


    const [clickedCard, setClickedCard] = useState([
        {
            id: null,
        },
        {
            id: null
        }
    ])

    const handleClick = (prop) => {
        prop.isFlipped = true 
        if (clickedCard[0].id === null) {
            

            console.log('first click')
            setClickedCard([
                {
                    id: prop.id,
                },
                {
                    id: null,
                },
            ]); 
        }else {
            console.log('second click')
            setClickedCard(prevState => [
                {
                    id: prevState[0].id,
                },
                {
                    id: prop.id,
                },
            ]);
            if (clickedCard[0].id === prop.id) {
                alert('Congratulations !') 
            }  
        }

    } 
        return (
            <div className="container">
                {boxes.map((box, index) => (
                    <div
                        className="box"
                        key={index}
                        onClick={() => handleClick(box)}
                    >
                        {box.isFlipped ? (
                            <img src={box.img} alt="box" />
                        ) : (
                            <div className="back"></div>
                        )} 
                    </div>
                ))}
            </div>
        );
    }