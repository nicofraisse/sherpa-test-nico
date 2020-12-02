import React from 'react'
import classes from '../styles/components/Header.module.scss'

const Header = ({ context, onSelectHeader }) => {
  return (
    <header onClick={() => onSelectHeader('header')}>
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
        <button>Profile</button>
        <button>Login</button>
      </div>
    </header>
  )
}

export default Header
