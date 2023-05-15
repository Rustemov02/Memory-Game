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
            // console.log(payload)
        },
        nextLevel : (state , {payload}) => {
            state.levelCount = payload 
            console.log(state.levelCount) 
        },
        increasaMove : state => {
            state.moves += 1
        }
    }
})

export const {nextLevel ,getUserName , increasaMove} = gameSlice.actions

export default gameSlice.reducer 