import React from 'react'
import classes from '../styles/components/ErrorMessage.module.scss'

const ErrorMessage = ({ message, type }) => {
  return (
    <div className={classes.ErrorMessage}>
      <div class='alert alert-danger alert-dismissible fade show' role='alert'>
        <strong>Error loading {type}: </strong>
        {message}
        <button
          type='button'
          class='close'
          data-dismiss='alert'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
    </div>
  )
}

export default ErrorMessage
