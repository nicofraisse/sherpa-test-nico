import React from 'react'
import classes from '../styles/components/MeetingCard.module.scss'

const MeetingCard = ({ meetingData }) => {
  return (
    <div className={classes.MeetingCard}>
      <h4>{meetingData.description}</h4>
    </div>
  )
}

export default MeetingCard
