import { Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import GlobalContext from '../context/GlobalContext';
export default function CreateEventButton() {
    const {setShowEvent} = useContext(GlobalContext)

  return (
    <Button onClick={()=> setShowEvent(true)} variant='outlined' sx={{py:2 , px:2,mb:2, borderRadius:8, display:'flex', alignItems:'center', "&hover":{boxShadow:3}, backgroundColor:"grey.200"}}>
        <AddIcon sx={{w:7, h:7}}/>
        <Typography sx={{}}>Create</Typography>
    </Button>
  )
}
