import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome(){



    return(
        <div>
            <p>Welcome My Game</p>
            <Link to='level-1'>Let's Game</Link>
        </div>
    )
}