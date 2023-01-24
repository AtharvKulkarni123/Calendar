import { Typography } from '@mui/material'
import dayjs from 'dayjs'
import React from 'react'

export default function Day({ day, key,rowIdx }) {
  const currentDateStyle = {
    mt: 1, 
    ml:2,
    color:"white",
    backgroundColor:"blue",
    borderRadius:"49%"
  }
  const otherDateStyle ={
    mt: 1, 
    ml:2,
    color:"black",
  }
  return (
    <div key={key} style={{  display: 'flex', flexDirection: 'column',border: '0.1px solid #E5E7EB',height:'100%'}}>
      <header style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        {rowIdx===0 &&(
                  <Typography fontSize={12} sx={{ mt: 1, ml:2 }}>{day.format('ddd').toUpperCase()}</Typography>

        )}
        {/* <div style={{height:'0.6em', display:'flex', alignItems:'center'}}> */}
        <Typography fontSize={12} padding={1} marginY={1} alignItems={'center'} sx={day.format("DD--MM--YY") === dayjs().format("DD--MM--YY") ? currentDateStyle:otherDateStyle   }>
          {day.format("DD")}
        </Typography>
        {/* </div> */}
       
      </header>
 
    </div>
  )
}
