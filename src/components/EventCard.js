import React, { useState, useRef } from 'react'
import classes from '../styles/components/EventCard.module.scss'

const EventCard = ({ eventData, context, active, click }) => {
  const [cardTranslation, setCardTranslation] = useState({})

  const cardReference = useRef(null)

  const handleClick = () => {
    if (context === 'home') {
      click()
      const currentPosition = cardReference.current.getBoundingClientRect()
      const [desiredX, desiredY] = [30, 40]
      setCardTranslation(
        `translate(${desiredX - currentPosition.x}px, ${
          desiredY - currentPosition.y
        }px)`
      )
    }
  }

  return (
    <div className={classes.EventCardContainer}>
      <div
        className={[
          classes.EventCard,
          active ? classes.EventCardActive : classes.EventCardInactive,
          !active && context === 'events' && classes.EventCardHide,
        ].join(' ')}
        style={{ transform: active ? cardTranslation : 'translate(0px, 0px)' }}
        id={`event-card-${eventData.id}`}
        onClick={handleClick}
        ref={cardReference}
      >
        <img src={eventData.logo} alt='' className={classes.EventCardLogo} />
        <h3 className={classes.EventCardTitle}>{eventData.title}</h3>
        <p
          className={[
            classes.EventCardDescription,
            active
              ? classes.EventCardDescriptionActive
              : classes.EventCardDescriptionInactive,
          ].join(' ')}
        >
          {eventData.detail}
        </p>
      </div>
    </div>
  )
}

export default EventCard
