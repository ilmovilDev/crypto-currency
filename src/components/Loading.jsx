import { Box, CircularProgress } from "@mui/material"

export const Loading = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        placeContent: 'center',
        minHeight: '90vh'
      }}
    >
      <CircularProgress />
    </Box>
  )
}
