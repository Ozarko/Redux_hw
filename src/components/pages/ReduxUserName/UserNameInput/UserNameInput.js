import classes from './UserNameInput.module.css'
import React from 'react'

const UserNameInput = ({value, userNameHandler}) => {
  return (
    <input className={classes.UserNameInput} type='text' value={value} onChange={userNameHandler} />
  )
}

export default UserNameInput
