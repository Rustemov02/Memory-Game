import React, { useEffect, useState } from 'react'
import car from './images/car.png'
import banana from './images/banana.png'
import plane from './images/plane.png'

import arrayShuffle from 'array-shuffle'

import './Box.css'
export default function Box() {


    const boxes = [
        {
            img: car,
            id: 1,
            isFlipped: false
        },
        {
            img: banana,
            id: 2,
            isFlipped: false
        },
        {
            img: plane,
            id: 3,
            isFlipped: false
        }
    ]

    // const [shuffledBoxes, setShuffledBoxes] = useState([]);
    const shuffledBoxes = arrayShuffle([...boxes , ...boxes])

    // useEffect(() => {
    //     setShuffledBoxes(arrayShuffle([...boxes, ...boxes]));
    //     console.log(shuffledBoxes)
    // }, []);

    const [clickedCard, setClickedCard] = useState([
        {
            id: null,
        },
        {
            id: null
        }
    ])
  
    const checkCard = (prop) => {
        
        const resetClickedCard = () => setClickedCard([{ id: null }, { id: null }])

        if (clickedCard[0].id === null) {
            console.log('first click')
            setClickedCard([
                {
                    id: prop.id,
                    isFlipped: true
                },
                {
                    id: null,
                },
            ]);
        } else {
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

                resetClickedCard()
            } else {
                resetClickedCard()
            }
        }
    }

    return (
        <div>
            <button onClick={()=>console.log(shuffledBoxes)}>Click</button>
            {shuffledBoxes.map((item, index) => (
                <div key={index} onClick={()=> checkCard(item)} style={{ border: 'solid red 1px', width: '70px', height: '70px', backgroundColor: 'black' }} >
                    {item.isFlipped ? ( <img src={item.img}/>) : (<div className='back'></div>)}
                   
                </div>
            ))}
        </div>
    )
}

// {
//     item.isFlipped ? (
//         <div key={index}>
//             <img src={item.img} onClick={() => checkCard(item)} style={{ border: 'solid red 1px', width: '70px', height: '70px', backgroundColor: item.color }} />
//         </div>
//     ) : (<div></div>)
// }