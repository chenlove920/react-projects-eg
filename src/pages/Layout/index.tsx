import { Outlet } from "react-router-dom"
import { useEffect } from "react"

import { useAppDispatch } from "../../store/hooks"
import { getBillList } from "../../store/modules/billStore"

const Layout =  () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getBillList())
    }, [dispatch])

    return (
        <>
            <div>lyaout</div>
            <Outlet></Outlet>
        </>
    )
}
export default Layout