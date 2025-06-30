import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

import { TabBar } from 'antd-mobile'

import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { getBillList } from "../../store/modules/billStore"
import { getTabsList } from "../../store/modules/tabsStore"
import { createComponentsByname } from "../../utils"

import './index.scss'

const Layout = () => {
    const { tabsList } = useAppSelector(state => state.tabs)
    const dispatch = useAppDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    // 启用，更新dispatch时调取tabs数据
    useEffect(() => {
        dispatch(getBillList())
        dispatch(getTabsList())
    }, [dispatch])

    return (
        <div className="kaLayout">
            <div className="page">
                {/* 二级路由出口 */}
                <Outlet />
            </div>

            <TabBar
                className="tabbar"
                activeKey={location.pathname}
                onChange={key => navigate(key)
                }
            >
                {tabsList.map(item => (
                    <TabBar.Item key={item.key} icon={() => createComponentsByname(item.icon)} title={item.title} />
                ))}
            </TabBar>
        </div>
    )
}
export default Layout