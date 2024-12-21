import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material';
import AppBarCustom from 'MUI-Components/AppBarCustom';
import DrawerCustom from 'MUI-Components/DrawerCustom';

const drawerWidth = 240

const Root = () => {
    return (
        <Box component="main">
            <header>
                <AppBarCustom drawerWidth={drawerWidth} />
                <DrawerCustom drawerWidth={drawerWidth} />
            </header>
            <Box sx={{ml:`${drawerWidth}px` , display:"flex" , justifyContent:"center"}}>
                <Outlet />
            </Box>
        </Box>
    )
}

export default Root