// 账单列表相关store
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { AppDispatch } from "..";
import { BILLLISTURL } from "../API";
import { BillStoreType } from "../../types/bill";

const billStore = createSlice({
    name: 'billStore',
    initialState: {
        billList: []
    } as BillStoreType,
    reducers: {
        setBillList(state, action) {
            state.billList = action.payload
        }
    }
})

// 结构actionCreater函数
const { setBillList } = billStore.actions

const getBillList = () => {
    return async (dispatch: AppDispatch) => {
        const res = await axios.get(BILLLISTURL)
        dispatch(setBillList(res.data))
    }
}

export { getBillList }
// 导出reducer
export default billStore.reducer

