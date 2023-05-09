import React, { useEffect, useState } from 'react'
import car from './images/car.png'
import banana from './images/banana.png'
import plane from './images/plane.png'


export default function Box() {


    const boxes = [
        {
            img: car,
            id: 1
        },
        {
            img: banana,
            id: 2
        },
        {
            img: plane,
            id: 3
        }
    ] 

    const [clickedCard, setClickedCard] = useState([
        {
            id: null
        },
        {
            id: null
        }
    ])

    useEffect(() => {
        console.log(clickedCard)
    }, [clickedCard])


    const checkCard = (prop) => {

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

                setClickedCard([
                    {
                        id: null,
                    },
                    {
                        id: prop.id,
                    },
                ]);
            } else {
                setClickedCard([
                    {
                        id: null
                    },
                    {
                        id: null
                    }
                ])
            }
        }
    }

    return (
        <div>
            {boxes.map((item, index) => (
                <img src={item.img} key={index} onClick={() => checkCard(item)} style={{ width: '70px', height: '70px', backgroundColor: item.color }}/>
            ))}
        </div>
    )
}   