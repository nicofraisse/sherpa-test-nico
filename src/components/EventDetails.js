import React from 'react'
import classes from '../styles/components/EventDetails.module.scss'

const EventDetails = ({ text, show }) => {
  return (
    <div
      className={[
        classes.EventDetails,
        show ? classes.EventDetailsShow : classes.EventDetailsHide,
      ].join(' ')}
    >
      {text}
    </div>
  )
}

export default EventDetails
