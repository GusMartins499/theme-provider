import 'styled-components'

declare module 'sytled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      backgroundColor: string;
      textColor: string;
    }
  }
}