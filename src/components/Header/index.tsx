import { useContext } from "react";
import Switch from "react-switch";

import { HeaderHTML, Container } from './styles'
import { ThemeContext } from 'styled-components'

interface IHeaderProps {
  title: string;
  handleToggleTheme: () => void;
}

function Header({ title, handleToggleTheme }: IHeaderProps) {
  const { title: theme, colors } = useContext(ThemeContext)

  return (
    <Container>
      <HeaderHTML>
        {title}
      </HeaderHTML>
      <Switch
        onChange={handleToggleTheme}
        checked={theme === 'dark'}
        height={20}
        width={40}
        handleDiameter={20}
        onColor={colors.thirdary}
        offColor={colors.thirdary}
      />
    </Container>
  )
}

export { Header }