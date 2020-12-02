import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Events from './layouts/Events'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { BASE_API_URL } from './configVariables'

const App = () => {
  const [context, setContext] = useState('home')
  const [events, setEvents] = useState([])

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/events`)
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err))
  }, [])

  const switchContext = (clickOrigin) => {
    if (context === 'home' && clickOrigin === 'event-card') {
      setContext('events')
    } else if (context === 'events' && clickOrigin === 'header') {
      setContext('home')
    }
  }

  return (
    <div>
      <Header context={context} onSelectHeader={switchContext} />
      <Sidebar context={context} />
      <Events context={context} events={events} onSelectEvent={switchContext} />
    </div>
  )
}

export default App
