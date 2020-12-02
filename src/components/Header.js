import React from 'react'
import classes from '../styles/components/Header.module.scss'

const Header = ({ context, onSelectHeader }) => {
  return (
    <header className={classes.Header} onClick={() => onSelectHeader('header')}>
      <div
        className={[
          classes.HeaderBanner,
          context === 'events'
            ? classes.HeaderBannerSmall
            : classes.HeaderBannerLarge,
        ].join(' ')}
      >
        <h2>Marketplace</h2>
      </div>

      <div className={classes.AccountLinks}>
        <button className='btn btn-secondary m-1'>Profile</button>
        <button className='btn btn-secondary m-1'>Login</button>
      </div>
    </header>
  )
}

export default Header
