import { Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <div>
            <header>
                <Typography color='secondary' gutterBottom variant="h4" component="p">
                    Amir Dhahri
                </Typography>
               
            </header>
            <Outlet />
        </div>
    )
}

export default Root