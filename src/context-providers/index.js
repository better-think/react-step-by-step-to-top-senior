import React from 'react'

export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };


const ThemeColor = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {
        console.log("click here");
    }
})

export default {
    ThemeColor: ThemeColor
}