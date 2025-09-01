import { Box, Typography } from "@mui/material"

export const Header = () => {
  return (
    <Box>
      <Typography
        variant='h4'
        component='h1'
        align='center'
        gutterBottom
      >
        Todo List
      </Typography>
    </Box>
  )
}
