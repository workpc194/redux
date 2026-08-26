import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}
export const collectionSlice = createSlice({
    name: 'collectionSlice',
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExist = state.items.find(
                item => item.id === action.payload.id
            )
            if (!alreadyExist) {
                state.items.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.items))
            }
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload.id
            )
            localStorage.setItem('collection', JSON.stringify(state.items))
        }
    }
})

export const { addCollection, removeCollection } = collectionSlice.actions
export default collectionSlice.reducer