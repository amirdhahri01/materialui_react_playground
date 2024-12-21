import { IconButton, Paper, Typography } from "@mui/material"
import "./Home.css"
import { Close } from "@mui/icons-material"

const Home = () => {
  return (
    <div>
      <Paper sx={{
        width: "366px",
        display: "flex",
        justifyContent: "space-between",
        mt: "66px",
        pt: "27px",
        pb: "7px",
        position: "relative"
      }}>
        <Typography variant="h6" sx={{
          ml: "16px",
          fontSize: "1.3rem",
        }}>GYM</Typography>
        <Typography variant="h6" sx={{
          mr: "33px",
          fontWeight: 500,
          fontSize: "1.4rem",
          opacity: "0.8"
        }}>$100</Typography>
        <IconButton sx={{
          position: "absolute",
          top: "0",
          right: "0"
        }}>
          <Close />
        </IconButton>
      </Paper>
    </div>
  )
}

export default Home