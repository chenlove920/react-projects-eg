export interface TabsStoreType {
    tabsList: TabsListType[],
    activeIndex: string
}
export interface TabsListType {
    key: string,
    title: string,
    icon: string,
    active: boolean
} 

