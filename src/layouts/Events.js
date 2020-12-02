import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EventCard from '../components/EventCard'
import MeetingCard from '../components/MeetingCard'
import classes from '../styles/layouts/Events.module.scss'
import { BASE_API_URL } from '../configVariables'

const Events = ({ context, events, onSelectEvent }) => {
  const [activeEventId, setActiveEventId] = useState(null)
  const [meetings, setMeetings] = useState([])

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/events/${activeEventId}/meetings`)
      .then((res) => setMeetings(res.data))
      .catch((err) => console.log(err))
  }, [activeEventId])

  const handleClick = (id) => {
    setActiveEventId(id)
    onSelectEvent('event-card')
  }

  const eventCards = events.map((event) => {
    return (
      <EventCard
        key={event.id}
        eventData={event}
        click={() => handleClick(event.id)}
        context={context}
        active={event.id === activeEventId && context !== 'home'}
      />
    )
  })

  const meetingCards = meetings.map((meeting) => (
    <MeetingCard key={meeting.id} meetingData={meeting} />
  ))

  return (
    <>
      <div
        className={[
          classes.EventsBanner,
          context === 'home'
            ? classes.EventsBannerShow
            : classes.EventsBannerHide,
        ].join(' ')}
        style={{ backgroundImage: `url('/images/event-bg.jpeg')` }}
      ></div>

      <div className={classes.EventsList}>
        <div className={classes.EventCardsContainer}>{eventCards}</div>
      </div>
      <div
        className={[
          classes.EventMeetings,
          context === 'events'
            ? classes.EventMeetingsShow
            : classes.EventMeetingsHide,
        ].join(' ')}
      >
        <h2>Featured Meetings</h2>
        <div className={classes.MeetingCardsContainer}>{meetingCards}</div>
      </div>
    </>
  )
}

export default Events
