import { useMemo, useState } from 'react'
import classNames from 'classnames'
import './index.scss'
import { DayBillType } from '../../types/bill'
import { clacBillListByDate } from '../../utils'
import { billTypeToName } from '../../contants/billList'
import Icon from '../Icon'

const DailyBill = (props: DayBillType) => {
  const { date, billList } = props
  const [show, setShow] = useState(false)
  // 当前页的统计
  const { pay, income, total } = useMemo(() => clacBillListByDate(billList), [billList])
  const changeBillListStatus = (show: boolean) => setShow(show)
  return (
    <div className={classNames('dailyBill')}>
      <div className="header" onClick={() => changeBillListStatus(!show)}>
        <div className="dateIcon">
          <span className="date">{date}</span>
          <span className={classNames('arrow', show && "expand")}></span>
        </div>
        <div className="oneLineOverview">
          <div className="pay">
            <span className="type">支出</span>
            <span className="money">{pay}</span>
          </div>
          <div className="income">
            <span className="type">收入</span>
            <span className="money">{income}</span>
          </div>
          <div className="balance">
            <span className="money">{total}</span>
            <span className="type">结余</span>
          </div>
        </div>
      </div>
      {/* 单日列表 */}
      {
        show && <div className="billList">
          {billList.map(item => {
            return (
              <div className="bill" key={item.id}>
                {/* 图标 */}
                <Icon type={item.useFor}></Icon>
                <div className="detail">
                  <div className="billType">{billTypeToName(item.useFor)}</div>
                </div>
                <div className={classNames('money', item.type)}>
                  {item.money.toFixed(2)}
                </div>
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}
export default DailyBill