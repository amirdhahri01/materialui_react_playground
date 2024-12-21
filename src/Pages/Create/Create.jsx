import { Box, Button, InputAdornment, styled, TextField } from "@mui/material"
import "./Create.css"
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#fff"),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const Create = () => {
  return (
    <Box component="form" sx={{ width: "380px" }}>
      <TextField
        fullWidth={true}
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
        fullWidth={true}
        label="With normal TextField"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
        variant="filled"
      />
      <ColorButton variant="contained">Custom CSS</ColorButton>
    </Box>
  )
}

export default Create