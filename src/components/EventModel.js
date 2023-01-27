import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import SegmentIcon from '@mui/icons-material/Segment';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CheckIcon from '@mui/icons-material/Check';
import dayjs from 'dayjs';

export default function EventModel() {
    const { setShowEvent, daySelected, dispatchCalEvent, selectedEvent } = useContext(GlobalContext)
    function handleSubmit(e){
        e.preventDefault()
        const calederEvent = {
        title, description, 
        label: selectedLabels,
        day: daySelected.valueOf(),
        id: selectedEvent ? selectedEvent.id : Date.now()    
        }
        if(selectedEvent){
            dispatchCalEvent({type:'update', payload: calederEvent,})
        }
        else{
            dispatchCalEvent({type:'push', payload: calederEvent,})

        }
        setShowEvent(false);
    }

    const [ title, setTitle ]= useState(selectedEvent ? selectedEvent.title:"");
    const [ description, setDescription ] = useState(selectedEvent ? selectedEvent.description:"")
    const labelsClasses = ['indigo', 'grey', 'green', 'blue', 'red', 'purple']
    const [ selectedLabels, setSelectedLabels ] = useState(selectedEvent ? labelsClasses.find((lbl)=> lbl === selectedEvent.label): labelsClasses[0]);
    useEffect(()=>{

    },[selectedLabels])

    
    return (
        <div style={{ height: '100vh', width: '100%', left: '0', top: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                <Dialog open={setShowEvent} >
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Title"
                            value={title}
                            fullWidth
                            required
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Box components="span" sx={{ display: 'flex', mt: 4 }}>
                            <AlarmOnIcon sx={{ mr: 2 }} />
                            <Typography sx={{ fontSize: 19 }}>{daySelected.format("dddd, MMMM DD ")}</Typography>

                        </Box>
                        <Box component="span" sx={{ display: 'flex', mt: 4 }}>
                            <SegmentIcon sx={{ mr: 1 }} />
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Add a description"
                                value={description}
                                style={{ width: 450, marginTop: -25, marginLeft: 10 }}
                                variant="standard"
                                fullWidth
                                required
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Box>
                        <Box component="span" sx={{ display: "flex", mt: 4 }}>
                            <BookmarkBorderIcon />
                            <Box sx={{ display: 'flex', marginX: 2, mr: 2 }}>
                                {
                                    labelsClasses.map((lblClass, i) => (
                                        <Grid key={i}
                                            onClick={() => setSelectedLabels(lblClass)}
                                            sx={{ background: `${lblClass}`, width: 25, height: 25, display: "flex", borderRadius: "50%", alignItems: 'center', justifyContent: 'center', cursor: 'pointer', mr: 4, ml: 2 }}>
                                           {selectedLabels === lblClass ?(
                                                <CheckIcon sx={{ height: 100, color: 'white' }} />
                                           ):null}
                                        </Grid>
                                    ))
                                }
                            </Box>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setShowEvent(false)}>Cancel</Button>
                        <Button type='submit'
                        onClick={handleSubmit}
                        >Save</Button>
                    </DialogActions>
                    
                </Dialog>
                <div style={{ p: 5 }}>
                </div>
            </div>
        </div>

    )
}
