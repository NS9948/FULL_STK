import React from 'react'
import UserCard from './UserCard'
import { useContext } from "react";
import ThemeContext from '../context/ThemeContext'

const Profile = () => {
    const theme = useContext(ThemeContext);
  return (
    <div>
      <UserCard/>
      Current theme: {theme}
    </div>
  )
}

export default Profile
