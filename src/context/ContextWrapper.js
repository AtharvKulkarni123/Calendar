import React, {useEffect, useReducer, useState} from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

function savedEventReducer(state, {type, payload}){
  switch (type) {
    case 'push':
      return [...state, payload];

      case 'update':
        return state.map(evt => evt.id === payload.id ? payload: evt)

      case 'delete':
        return state.filter(evt => evt.id !== payload.id)
    default:
      throw new Error();
  }
}

function initEvents(){
  const storageEvents = localStorage.getItem('savedEvents');
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}
export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [showEventModel, setShowEvent] = useState(false)
    const [daySelected, setDaySelected] = useState(dayjs())
    const [savedEvents, dispatchCalEvent] = useReducer(savedEventReducer ,[], initEvents)
    const [selectedEvent, setSelectedEvents] = useState(null)


    useEffect(()=>{
      localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
    }, [savedEvents])

    useEffect(()=>{
      if(!showEventModel){
        setSelectedEvents(null)
      }
    },[showEventModel])

  return (
    <GlobalContext.Provider value={{monthIndex, setMonthIndex, showEventModel, setShowEvent,
    daySelected, setDaySelected, savedEvents,dispatchCalEvent, selectedEvent, setSelectedEvents
    }}>
        {props.children}
    </GlobalContext.Provider>
  )
}
