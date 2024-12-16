import { Divider, Drawer, Toolbar } from '@mui/material'

const DrawerCustom = ({ drawerWidth }) => {
    return (
        <Drawer
            sx={{
                width: `${drawerWidth}px`,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: `${drawerWidth}px`,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
        </Drawer>
    )
}

export default DrawerCustom