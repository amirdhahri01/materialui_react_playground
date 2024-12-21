import { Box, InputAdornment, TextField } from "@mui/material"
import "./Create.css"

const Create = () => {
  return (
    <Box component="form">
      <TextField
        label="With normal TextField"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          },
        }}
        variant="filled"
      />
      <TextField
        label="With normal TextField"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
        variant="filled"
      />
    </Box>
  )
}

export default Create