import React from 'react'
import classes from '../styles/components/Sidebar.module.scss'

const Sidebar = ({ context }) => {
  return (
    <div className={[classes.Sidebar, classes[`Sidebar${context}`]].join(' ')}>
      <a href='#'>Companies</a>
      <a href='#'>Members</a>
      <a href='#' className={classes.EventsMeetingsLink}>
        <span>Events</span>
        <span>Meetings</span>
      </a>
      <a href='#' className={classes.StudiosLink}>
        Studios
      </a>
    </div>
  )
}

export default Sidebar
