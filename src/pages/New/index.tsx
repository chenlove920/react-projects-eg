import { Button, DatePicker, Input, NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

import classNames from 'classnames'
import Icon from '../../conponents/Icon'
import { billListData } from '../../contants/billList'

import './index.scss'
import { useState } from 'react'
import { BillType } from '../../types/new'


const New = () => {
  const navigate = useNavigate()
  const [billType, setBillType] = useState<BillType>(BillType.PAY)
  const changeBillType = (type:BillType) => setBillType(type)
  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => navigate(-1)}>
        记一笔
      </NavBar>

      <div className="header">
        <div className="kaType">
          <Button
            shape="rounded"
            onClick={()=> {changeBillType(BillType.PAY)}}
            className={classNames(billType === BillType.PAY &&'selected')}
          >
            支出
          </Button>
          <Button
           onClick={()=> {changeBillType(BillType.INCOME)}}
            className={classNames(billType === BillType.INCOME &&'selected')}
            shape="rounded"
          >
            收入
          </Button>
        </div>

        <div className="kaFormWrapper">
          <div className="kaForm">
            <div className="date">
              <Icon type="calendar"  />
              <span className="text">{'今天'}</span>
              <DatePicker
                className="kaDate"
                title="记账日期"
                max={new Date()}
              />
            </div>
            <div className="kaInput">
              <Input
                className="input"
                placeholder="0.00"
                type="number"
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
                        ''
                      )}
                      key={item.type}

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
        <Button className="btn save">
          保 存
        </Button>
      </div>
    </div>
  )
}

export default New