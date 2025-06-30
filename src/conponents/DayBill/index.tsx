import { useMemo } from 'react'
import classNames from 'classnames'
import './index.scss'
import { DayBillType } from '../../types/bill'
import { clacBillListByDate } from '../../utils'

const DailyBill = (props: DayBillType) => {
  const { date, billList } = props
  // 当前页的统计
  const { pay, income, total } = useMemo(() => clacBillListByDate(billList), [billList])
  return (
    <div className={classNames('dailyBill')}>
      <div className="header">
        <div className="dateIcon">
          <span className="date">{date}</span>
          <span className={classNames('arrow')}></span>
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
    </div>
  )
}
export default DailyBill