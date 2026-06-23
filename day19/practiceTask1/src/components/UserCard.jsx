import React from 'react'
import { useContext } from "react";
import UserContext from '../context/UserContext';

const UserCard = () => {
    const user = useContext(UserContext)
  return (
    <div>
      Name: {user.name}
      <br />
      Role: {user.role}
    </div>
  )
}

export default UserCard
