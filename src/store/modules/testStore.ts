import { createSlice } from "@reduxjs/toolkit";

const testStore = createSlice({
    name: 'testStore',
    initialState: {
        count: 0
    },
    reducers: {
        increase(state, action) {
            state.count += action.payload
        },
        decrease(state, action) {
            state.count -= action.payload
        }
    }
})

const {increase, decrease} = testStore.actions


export default testStore.reducer

export {increase, decrease}