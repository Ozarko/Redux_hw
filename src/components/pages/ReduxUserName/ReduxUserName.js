import classes from './ReduxUserName.module.css'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import UserNameInput from './UserNameInput/UserNameInput'
import ChangeNameBtn from './ChangeNameBtn/ChangeNameBtn'
import { addUserName, removeUserName } from '../../store/action/userNameAction'

const ReduxUserName = ({userName, dispatch}) => {
  console.log(userName)
  const [userNameState, setUserNameState] = useState('')

  const userNameHandler = (event) => {
    setUserNameState(event.target.value)
  }

  const removeUserNameHandler = () => {
    dispatch(removeUserName())
    setUserNameState('')
  }

  return (
    <div className={classes.ReduxUserName}>
      <div className={classes.UserNameBox}>
        <h2>User Name is {userName}</h2>
        <UserNameInput value={userNameState} userNameHandler={userNameHandler}/>
        <div className={classes.BtnBox}>
          <ChangeNameBtn name='Add' clickHandler={()=> dispatch(addUserName(userNameState))} />
          <ChangeNameBtn name='Remove' clickHandler={()=> removeUserNameHandler()} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userName: state.userName
})

export default connect(mapStateToProps)(ReduxUserName)
