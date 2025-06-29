export interface TabsListType {
    tabsList: TabsType[],
    activeIndex: string
}
export interface TabsType {
    key: string,
    title: string,
    icon: string,
    active: boolean
} 

