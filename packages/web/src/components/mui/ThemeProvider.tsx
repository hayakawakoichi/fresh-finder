import { FC, ReactNode } from 'react'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

type ThemeProps = {
  children: ReactNode
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffa8',
      main: '#fff176',
      dark: '#cabf45',
      contrastText: '#263238',
    },
    secondary: {
      light: '#b2fab4',
      main: '#81c784',
      dark: '#519657',
      contrastText: '#263238',
    },
    background: {
      default: '#fafafa',
      paper: '#fafafa',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    h1: {
      fontSize: '2rem',
      lineHeight: '1.75',
    },
    h2: {
      fontSize: '1.5rem',
      lineHeight: '1.75',
    },
    h3: {
      fontSize: '1.2rem',
      lineHeight: '1.75',
    },
    h4: {
      fontSize: '1rem',
      lineHeight: '1.5',
    },
    h5: {
      fontSize: '0.857rem',
      lineHeight: '1.5',
    },
    h6: {
      fontSize: '0.75rem',
      lineHeight: '1.5',
    },
  },
})

export const CommonThemeProvider: FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
