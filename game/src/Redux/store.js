import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    levelCount : 1,
    username : null,
    moves : 0
}

export const gameSlice = createSlice({
    name : "memoryGame",
    initialState,
    reducers : {
        getUserName : (state,{payload}) => {
            state.username = payload
            console.log(state.username)
        },
        nextLevel : (state , {payload}) => {
            state.levelCount = payload 
        },
        increasaMove : state => {
            state.moves += 1
        },
        resetMoves : state => {
            state.moves = 0
        }
    }
})

export const {nextLevel ,getUserName , increasaMove, resetMoves} = gameSlice.actions
export default gameSlice.reducer 