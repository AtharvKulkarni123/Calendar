import { Button, Stack, Typography } from '@mui/material'
import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext'
import OnClickPopUp from './OnClickPopUp'

export default function Day({ day, key, rowIdx }) {
  const currentDateStyle = {
    mt: 1,
    ml: 2,
    color: "white",
    backgroundColor: "blue",
    borderRadius: "49%"
  }
  const otherDateStyle = {
    mt: 1,
    ml: 2,
    color: "black",
  }
  const [dayEvents, setDayEvents] = useState([])
  const { setDaySelected, setShowEvent, savedEvents, setSelectedEvents } = useContext(GlobalContext)
  const data = [
    {
      "title": "Interviews",
      "description": "Done",
      "label": "indigo",
      "day": 1670437800000,
      "id": 1674643319367
    },
  ]
  useEffect(() => {
    const events = savedEvents.filter(evt => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY"));
    // events.length && console.log(events, day);
    setDayEvents(events);
  }, [savedEvents, day]);
  useEffect(() => {
    dayEvents.length > 2 && console.log(dayEvents)
  }, [dayEvents])

  function openPopover(e){
    e.stopPropagation();
  }

  return (
    <div key={key} style={{ display: 'flex', flexDirection: 'column', border: '0.1px solid #E5E7EB', height: '100%', overflow: 'auto' }}>
      <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {rowIdx === 0 && (
          <Typography fontSize={12} sx={{ mt: 1, ml: 2 }}>{day.format('ddd').toUpperCase()}</Typography>

        )}
        <Typography fontSize={12} padding={1} marginY={1} alignItems={'center'} sx={day.format("DD--MM--YY") === dayjs().format("DD--MM--YY") ? currentDateStyle : otherDateStyle}>
          {day.format("DD")}
        </Typography>

      </header>

      <div style={{ cursor: "pointer", display: "flex", flexGrow: 1 }} onClick={() => {
        setDaySelected(day)
        setShowEvent(true)
      }}>
        <Stack sx={{ width: "100%" }}>
          {dayEvents.length < 3 ? (
            <Stack>
              {dayEvents.map((data, idx) =>
                <Typography key={data} onClick={() => setSelectedEvents(data)}
                  sx={{ background: `${data.label}`, mr: 3, color: "white", mb: 1, height: 20, width: "100%" }}> {data.title}</Typography>
              )}
            </Stack>
          ) : (


            <Stack>
              {dayEvents.slice(0, 3).map((data, idx) =>
                <Typography key={data} onClick={() => setSelectedEvents(data)}
                  sx={{ background: `${data.label}`, mr: 3, color: "white", mb: 1, height: 20, width: "100%" }}> {data.title}</Typography>
              )}
              <Button onClick={openPopover}>Show more</Button>
            </Stack>
          )}
        </Stack>
      </div>
    </div>
  )
}
