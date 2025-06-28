import { Link, Outlet } from "react-router-dom"

export default () => {
    return (
        <>
            <div>
                这个一个路由测试案例
                <Link to="test1">一级路由1</Link>
                <Link to="test2">一级路由2</Link>
                <Outlet></Outlet>
            </div>
            <div>
                <Link to="about">about</Link>
                 <Link to="teststore">store测试</Link>
            </div>
        </>
    )
}