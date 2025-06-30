import { useEffect, useMemo, useState } from 'react'
import { NavBar, DatePicker } from 'antd-mobile'
import classNames from 'classnames'
import lodash from 'lodash'
import { clacBillListByDate, formatDateYYYYMM, formatDateYYYYMMDD } from '../../utils'
import { useAppSelector } from '../../store/hooks'

import DailyBill from '../../conponents/DayBill'

import './index.scss'
import { BillListType } from '../../types/bill'
import { useNavigate } from 'react-router-dom'

const Month = () => {
    const navigate = useNavigate()
    // 按月分组数据
    const { billList } = useAppSelector(state => state.bill)
    const monthGroup = useMemo(() => lodash.groupBy(billList, (item) => formatDateYYYYMM(item.date)), [billList])

    // 控制弹窗
    const [dateVisible, setDateVisible] = useState(false)
    // 控制时间
    const [currentDate, setCurrentDate] = useState(() => formatDateYYYYMM(new Date()))
    // 当前月份的数据
    const [currentMonthList, setCurrentMonthList] = useState<BillListType[]>([])
    // 当前月的统计
    const { pay, income, total } = useMemo(() => clacBillListByDate(currentMonthList), [currentMonthList])
    // 初始化页面统计
    useEffect(() => {
        const nowDate = formatDateYYYYMM(new Date)
        setCurrentMonthList(monthGroup[nowDate] ?? [])
    }, [monthGroup])
    // 当前月按日分组
    const {
        dayGroup,
        dayKeys
    } = useMemo(() => {
        const dayGroup = lodash.groupBy(currentMonthList, (item) => formatDateYYYYMMDD(item.date))
        const dayKeys = Object.keys(dayGroup)
        return {
            dayGroup,
            dayKeys
        }
    }, [currentMonthList])

    // 切换时间层
    const changeDateVisiable = (status: boolean) => setDateVisible(status)

    // 确认按钮
    const confirmDate = (date: Date, status: boolean) => {
        const newDate = formatDateYYYYMM(date)
        setCurrentDate(newDate)
        changeDateVisiable(status)
        setCurrentMonthList(monthGroup[newDate] ?? [])
    }

    return (
        <div className="monthlyBill">
            <NavBar className="nav" onBack={() => navigate(-1)}>
                月度收支
            </NavBar>
            <div className="content">
                <div className="header">
                    {/* 时间切换区域 */}
                    <div className="date" onClick={() => changeDateVisiable(true)}>
                        <span className="text">
                            {currentDate}月账单
                        </span>
                        {/* 控制箭头上下 */}
                        <span className={classNames('arrow', dateVisible && 'expand')}></span>
                    </div>
                    {/* 统计区域 */}
                    <div className='twoLineOverview'>
                        <div className="item">
                            <span className="money">{pay}</span>
                            <span className="type">支出</span>
                        </div>
                        <div className="item">
                            <span className="money">{income}</span>
                            <span className="type">收入</span>
                        </div>
                        <div className="item">
                            <span className="money">{total}</span>
                            <span className="type">结余</span>
                        </div>
                    </div>
                    {/* 时间选择器 */}
                    <DatePicker
                        className="kaDate"
                        title="记账日期"
                        precision="month"
                        visible={dateVisible}
                        onCancel={() => changeDateVisiable(false)}
                        onConfirm={(date) => confirmDate(date, false)}
                        onClose={() => changeDateVisiable(false)}
                        max={new Date()}
                    />
                </div>
                {/* 当前月统计数据 */}
                {dayKeys.map(key => <DailyBill date={key} billList={dayGroup[key]} key={key} ></DailyBill>)}
            </div>
        </div >
    )
}

export default Month