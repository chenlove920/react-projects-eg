// 账单列表相关store
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { AppDispatch } from "..";
import { BILLLISTURL } from "../API";
import { BillStoreType, SubBillListType } from "../../types/bill";

const billStore = createSlice({
    name: 'billStore',
    initialState: {
        billList: []
    } as BillStoreType,
    reducers: {
        setBillList(state, action) {
            state.billList = action.payload
        },
        addBill(state, action) {
            state.billList.push(action.payload)
        }
    }
})

// 结构actionCreater函数
const { setBillList, addBill } = billStore.actions

// 记一笔
const createBill = (data: SubBillListType) => {
    return async (dispatch: AppDispatch) => {
        const res = await axios.post(BILLLISTURL, data)
        dispatch(addBill(res.data))
    }
}

const getBillList = () => {
    return async (dispatch: AppDispatch) => {
        const res = await axios.get(BILLLISTURL)
        dispatch(setBillList(res.data))
    }
}

export { getBillList, createBill }
// 导出reducer
export default billStore.reducer

