import { Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <div>
            <header>
                <Typography variant="h4" component="p">
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi adipisci ducimus, possimus velit voluptas quisquam temporibus optio quis, cumque quibusdam fuga perspiciatis sed voluptatibus magnam. Voluptas veniam voluptatibus eius expedita.
                </Typography>

            </header>
            <Outlet />
        </div>
    )
}

export default Root