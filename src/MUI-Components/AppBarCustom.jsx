import { Box, Toolbar, AppBar, Link, Typography, Avatar } from "@mui/material"

const AppBarCustom = ({ drawerWidth }) => {
    return (
        <Box ml={`${drawerWidth}px`} sx={{ flexGrow: 1, width: `calc(100% - ${drawerWidth})` }}>
            <AppBar position="static">
                <Toolbar>
                    <Link sx={{ flexGrow: 1, "&:hover": { fontSize: "16.5px" } }} color="inherit" href='/' underline="none">My expense</Link>
                    <Typography mr={2} variant="body1" color="inherit">Amir Dhahri</Typography>
                    <Avatar alt="Amir Dhahri" src='https://mui.com/static/images/avatar/1.jpg'></Avatar>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default AppBarCustom