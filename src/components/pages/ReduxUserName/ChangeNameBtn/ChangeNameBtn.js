import classes from './ChangeNameBtn.module.css'
import React from 'react'

const ChangeNameBtn = ({name, clickHandler}) => {
  return (
    <button className={classes.ChangeNameBtn} onClick={clickHandler}>{name}</button>
  )
}

export default ChangeNameBtn
