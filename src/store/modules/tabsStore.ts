// 账单列表相关store
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { AppDispatch } from "..";
import { TABSURL } from "../API";
import { TabsStoreType } from "../../types/tabs";
const tabsStore = createSlice({
    name: 'tabsStore',
    initialState: {
        tabsList: [],
        activeIndex: "/"
    } as TabsStoreType,
    reducers: {
        setTabsList(state, action) {
            state.tabsList = action.payload
        }

    }
})

// 结构actionCreater函数
const { setTabsList } = tabsStore.actions

const getTabsList = () => {
    return async (dispatch: AppDispatch) => {
        // 拉取数据
        const res = await axios.get(TABSURL)
        dispatch(setTabsList(res.data))
    }
}

export { getTabsList }
// 导出reducer
export default tabsStore.reducer

