import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            main: '#22223b'
        },
        secondary: {
          main: '#e7ecef'
        }
    }
})

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ theme }>
        { children }
    </ThemeProvider>
  )
}
