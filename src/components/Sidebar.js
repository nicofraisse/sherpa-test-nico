import React from 'react'
import classes from '../styles/components/Sidebar.module.scss'

const Sidebar = ({ context }) => {
  return (
    <div className={[classes.Sidebar, classes[`Sidebar${context}`]].join(' ')}>
      <a href='#' className='btn btn-dark'>
        Companies
      </a>
      <a href='#' className='btn btn-dark'>
        Members
      </a>
      <div className={classes.EventsMeetingsLink}>
        <a href='#' className='btn btn-dark'>
          Events
        </a>
        <a href='#' className='btn btn-dark'>
          Meetings
        </a>
      </div>
      <a href='#' className={[classes.StudiosLink, 'btn btn-dark'].join(' ')}>
        Studios
      </a>
    </div>
  )
}

export default Sidebar
