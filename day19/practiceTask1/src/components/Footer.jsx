import React from 'react'
import { useContext } from "react";
import ThemeContext from '../context/ThemeContext'

const Footer = () => {
    const theme = useContext(ThemeContext);
  return (
    <div>
      Current theme: {theme}
    </div>
  )
}

export default Footer