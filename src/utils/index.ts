import React from "react"

// 引入全部的icons
import * as ICONS from 'antd-mobile-icons'
import dayjs from "dayjs"


// 根据icon名称创建对应的组件
export const createComponentsByname = (name: string) => React.createElement((ICONS as any)[name])


// new date时间格式化
export const formatDate = (date:Date) => dayjs(date).format('YYYY-MM')
