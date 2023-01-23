import { Box, Grid } from '@mui/material'
import React from 'react'
import Day from './Day'

export default function Month({ month }) {
  console.log('month', month)
  return (
    <Box sx={{ flexGrow: 1 }}>
      {month.map((ele,idx)=>{
        return (
          <Grid key={idx} container spacing={2}>
           {ele.map((day,i)=>{
             return (<Grid item lg={1.7}>{day}</Grid>)
           })}
          </Grid>)
      })}
    </Box>
  )
}
