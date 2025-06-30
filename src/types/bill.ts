export interface BillStoreType {
    billList: BillListType[]
}
export interface BillListType {
    id: number,
    type: string,
    money: number,
    date: Date,
    useFor: string,
}
export interface SubBillListType {
    type: string,
    money: number,
    date: string,
    useFor: string,
}

export interface DayBillType {
    date: string,
    billList: BillListType[]
}