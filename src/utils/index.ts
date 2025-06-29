import React from "react"

// 引入全部的icons
import * as ICONS from 'antd-mobile-icons'


// 根据icon名称创建对应的组件
export const createComponentsByname =  (name:string) =>  {
    return React.createElement((ICONS as any)[name])
}
