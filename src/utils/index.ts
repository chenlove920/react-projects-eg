import React from "react"

// 引入全部的icons
import * as ICONS from 'antd-mobile-icons'
import dayjs from "dayjs"
import { BillListType } from "../types/bill"


// 根据icon名称创建对应的组件
export const createComponentsByname = (name: string) => React.createElement((ICONS as any)[name])


// new date时间格式化
export const formatDate = (date: Date, format: string) => dayjs(date).format(format)

export const formatDateYYYY= (date: Date) => formatDate(date, 'YYYY') 

export const formatDateYYYYMM = (date: Date) => formatDate(date, 'YYYY-MM')

export const formatDateYYYYMMDD = (date: Date) => formatDate(date, 'YYYY-MM-DD')

export const formatDateYYYYMMDDHHmmss = (date: Date) => formatDate(date, 'YYYY-MM-DD HH:mm:ss')

// 计算支出，收入，结余
export const clacBillListByDate= (currentMonthList:BillListType[]) => {
    // 支出
    const pay = currentMonthList.filter(item => item.type === 'pay').reduce((money, item) => money + item.money, 0)
    // 收入
    const income = currentMonthList.filter(item => item.type === 'income').reduce((money, item) => money + item.money, 0)
    //结余
    const total = pay + income
    return {
        pay,
        income,
        total
    }
}
