import React from 'react'
import classes from '../styles/components/AccountControls.module.scss'

const AccountControls = () => {
  return (
    <div className={classes.AccountControls}>
      <button className='btn btn-secondary m-1'>Profile</button>
      <button className='btn btn-secondary m-1'>Login</button>
    </div>
  )
}

export default AccountControls
