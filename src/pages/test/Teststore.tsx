import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { decrease, increase } from "../../store/modules/testStore"

export default () => {
    const { count } = useAppSelector(state => state.testStore)
    const dispatch = useAppDispatch()
    return (
        <>
            <div onClick={() => dispatch(increase(10))}>---</div>
            <div>{count}</div>
            <div onClick={() => dispatch(decrease(20))}>+++</div>
            <Link to="/">home</Link>
        </>
    )
}