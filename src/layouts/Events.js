import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EventCard from '../components/EventCard'
import MeetingCard from '../components/MeetingCard'
import EventDetails from '../components/EventDetails'
import ErrorMessage from '../components/UI/ErrorMessage'
import Banner from '../components/Banner'
import classes from '../styles/layouts/Events.module.scss'
import { BASE_API_URL } from '../configVariables'
import Spinner from '../components/UI/Spinner'

const Events = ({ context, events, onSelectEvent, eventsError }) => {
  const [activeEventId, setActiveEventId] = useState(0)
  const [meetings, setMeetings] = useState([])
  const [eventsLoading, setEventsLoading] = useState(true)
  const [meetingsLoading, setMeetingsLoading] = useState(true)
  const [meetingsError, setMeetingsError] = useState('')

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/events/${activeEventId}/meetings`)
      .then((res) => {
        setMeetings(res.data)
        setMeetingsLoading(false)
      })
      .catch((err) => {
        setMeetingsError(err.message)
        setMeetingsLoading(false)
      })
  }, [activeEventId])

  useEffect(() => {
    if (events) {
      setEventsLoading(false)
    }
  }, [events])

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
    <MeetingCard key={Math.random().toString()} meetingData={meeting} />
  ))

  return (
    <>
      <Banner show={context === 'home'} imgSrc='/images/event-bg.jpeg' />

      {eventsLoading ? (
        <Spinner />
      ) : eventsError ? (
        <ErrorMessage message={eventsError} type='events' />
      ) : (
        <div className={classes.EventsList}>
          <div className={classes.EventCardsContainer}>{eventCards}</div>
        </div>
      )}
      <EventDetails
        text={events[activeEventId - 1]?.detail}
        show={context !== 'home'}
      />

      {meetingsLoading ? (
        <Spinner />
      ) : meetingsError ? (
        <ErrorMessage message={meetingsError} type='meetings' />
      ) : (
        <div
          className={[
            classes.EventMeetings,
            context === 'events'
              ? classes.EventMeetingsShow
              : classes.EventMeetingsHide,
          ].join(' ')}
        >
          <h2 className='mb-4 mt-5'>Featured Meetings</h2>
          <div className={classes.MeetingCardsContainer}>{meetingCards}</div>
        </div>
      )}
    </>
  )
}

export default Events
