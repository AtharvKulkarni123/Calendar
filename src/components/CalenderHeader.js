import { Button, Typography, Stack, IconButton } from '@mui/material'
import React,{useContext} from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import GlobalContext from '../context/GlobalContext';

export default function CalenderHeader() {
  const {monthIndex, setMonthIndex} = useContext(GlobalContext) 
  function handlePrevMonth(){
    setMonthIndex(monthIndex-1)
  } 

  function handleNextMonth(){
    setMonthIndex(monthIndex+1)
  }
  return (
    <header sx={{ px: 1, py: 2, display: 'flex', alignItems: 'center' }}>
      <Stack sx={{ display: 'flex', flexDirection: "row" }}>
        <Typography variant='h6' sx={{ color: "grey.500" }}>Calender</Typography>
        <Button variant='outlined' sx={{ ml: 3, mb: 1, py: 0.5, px: 2 }}>Today</Button>
        <IconButton sx={{ color: "grey.600" }} onClick={handlePrevMonth}>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton sx={{ color: "grey.600" }} onClick={handleNextMonth}>
          <ChevronRightIcon />
        </IconButton>
      </Stack>
    </header>
  )
}
