import { Outlet } from 'react-router-dom'
import { Avatar, Link, Typography, Toolbar, Box, AppBar, Divider, Drawer } from '@mui/material';
import AppBarCustom from 'MUI-Components/AppBarCustom';
import DrawerCustom from 'MUI-Components/DrawerCustom';

const drawerWidth = 240

const Root = () => {
    return (
        <div>
            <header>
                <AppBarCustom drawerWidth={drawerWidth} />
                <DrawerCustom drawerWidth={drawerWidth} />
            </header>
            <Outlet />
        </div>
    )
}

export default Root