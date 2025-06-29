// 账单列表相关store
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { AppDispatch } from "..";
const billStore = createSlice({
    name: 'billStore',
    initialState: {
        billList: []
    },
    reducers: {
        setBillList(state, action) {
            state.billList = action.payload
        }
    }
})

// 结构actionCreater函数
const { setBillList } = billStore.actions

const getBillList = () => {
    const URL = "http://localhost:3004/test"
    return async (dispatch: AppDispatch) => {
        const res = await axios.get(URL)
        dispatch(setBillList(res.data))
    }
}

export { getBillList }
// 导出reducer
export default billStore.reducer

