import React from 'react'
import classes from '../styles/components/Banner.module.scss'

const Banner = ({ show, imgSrc }) => {
  console.log('rendering banner')
  return (
    <div>
      <div
        className={[
          classes.EventsBanner,
          show ? classes.EventsBannerShow : classes.EventsBannerHide,
        ].join(' ')}
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>
    </div>
  )
}

export default Banner
