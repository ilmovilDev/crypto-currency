import { Box, Typography } from "@mui/material"

export const HasError = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h6"
      >
        Error occurred while fetching data.
      </Typography>
    </Box>
  )
}
