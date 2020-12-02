import React from 'react'
import classes from '../styles/components/MeetingCard.module.scss'

const MeetingCard = ({ meetingData }) => {
  const startDate = new Date(Date.parse(meetingData.start))

  const dateStr = `${startDate.getMonth()}/${startDate.getDay()}/${startDate.getFullYear()}`

  return (
    <div className={classes.MeetingCard}>
      <h4>{meetingData.description}</h4>
      <p>{dateStr}</p>
    </div>
  )
}

export default MeetingCard
