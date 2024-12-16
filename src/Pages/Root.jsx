import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <div>
            <header></header>
            <Outlet />
        </div>
    )
}

export default Root