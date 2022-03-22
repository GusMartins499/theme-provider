import { useState, useCallback } from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'

import { Header } from './components/Header'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

function App() {
  const [theme, setTheme] = useState(light)

  const handleToggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [setTheme, theme])

  return (
    <ThemeProvider theme={theme}>
      <Header title='Título do header' handleToggleTheme={handleToggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export { App }