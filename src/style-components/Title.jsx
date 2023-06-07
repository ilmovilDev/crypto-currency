import { Typography } from '@mui/material'

export const Title = ({ children }) => {
  return (
    <Typography
        variant='h4'
        sx={{
            letterSpacing: 1.5,
            marginY: 2
        }}
    >
        { children }
    </Typography>
  )
}
