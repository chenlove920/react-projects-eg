import { Button, DatePicker, Input, NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

import classNames from 'classnames'
import Icon from '../../components/Icon'
import { billListData } from '../../contants/billList'

import './index.scss'
import { useState } from 'react'
import { BillType } from '../../types/new'
import { formatDateYYYYMMDD, formatDateYYYYMMDDHHmmss } from '../../utils'
import { createBill } from '../../store/modules/billStore'
import { useAppDispatch } from '../../store/hooks'


const New = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [billType, setBillType] = useState<BillType>(BillType.PAY)
    const changeBillType = (type: BillType) => setBillType(type)
    // 控制时间显示隐藏
    const [showDate, setShowDate] = useState<boolean>(false)
    const setDateStatus = (status: boolean) => setShowDate(status)
    const [date, setDate] = useState<Date>(new Date())
    const confirmDate = (date: Date) => {
        setDate(date)
        setDateStatus(false)
    }
    // 收集输入金额
    const [money, setMoney] = useState("0")
    const changeMoney = (value: string) => setMoney(value)
    // 收集类型
    const [type, setType] = useState('')
    const setUseFor = (value: string) => setType(value)
    // 组装数据
    const submitBill = () => {
        const data = {
            type: billType,
            useFor: type,
            money: billType === BillType.PAY ? -money : +money,
            date: formatDateYYYYMMDDHHmmss(date)
        }
        dispatch(createBill(data))
        // navigate('/')
    }
    return (
        <div className="keepAccounts">
            <NavBar className="nav" onBack={() => navigate(-1)}>
                记一笔
            </NavBar>

            <div className="header">
                <div className="kaType">
                    <Button
                        shape="rounded"
                        onClick={() => { changeBillType(BillType.PAY) }}
                        className={classNames(billType === BillType.PAY && 'selected')}
                    >
                        支出
                    </Button>
                    <Button
                        onClick={() => { changeBillType(BillType.INCOME) }}
                        className={classNames(billType === BillType.INCOME && 'selected')}
                        shape="rounded"
                    >
                        收入
                    </Button>
                </div>

                <div className="kaFormWrapper">
                    <div className="kaForm">
                        <div className="date">
                            <Icon type="calendar" />
                            <span className="text" onClick={() => setDateStatus(true)}>{formatDateYYYYMMDD(date)}</span>
                            <DatePicker
                                className="kaDate"
                                title="记账日期"
                                max={new Date()}
                                visible={showDate}
                                onCancel={() => setDateStatus(false)}
                                onConfirm={confirmDate}
                            />
                        </div>
                        <div className="kaInput">
                            <Input
                                className="input"
                                placeholder="0.00"
                                type="number"
                                value={money}
                                onChange={changeMoney}
                            />
                            <span className="iconYuan">¥</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="kaTypeList">
                {billListData[billType].map(item => {
                    return (
                        <div className="kaType" key={item.type}>
                            <div className="title">{item.name}</div>
                            <div className="list">
                                {item.list.map(item => {
                                    return (
                                        <div
                                            className={classNames(
                                                'item',
                                                type === item.type ? 'selected' : ''
                                            )}
                                            key={item.type}
                                            onClick={() => setUseFor(item.type)}
                                        >
                                            <div className="icon">
                                                <Icon type={item.type} />
                                            </div>
                                            <div className="text">{item.name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="btns">
                <Button className="btn save" onClick={submitBill}>
                    保 存
                </Button>
            </div>
        </div>
    )
}

export default New