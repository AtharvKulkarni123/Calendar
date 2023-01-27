import { Button, Card, Popover, Stack, Typography } from '@mui/material'
import { width } from '@mui/system';
import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext';

export default function OnClickPopUp({data}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {setSelectedEvents} = useContext(GlobalContext)
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      event.stopPropagation()
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
  
    return (
      <div>
        <Button  onClick={handleClick}>
          Show More
        </Button>
        <Popover
          open={open}
        sx={{width:"500px"}}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
             vertical: "bottom",
            horizontal: "right",
          }}

        >
             <Card  sx={{width:"100%"}}>
              {data.map((ele, idx) =>
                <Typography key={idx} onClick={() => setSelectedEvents(ele)}
                  sx={{ background: `${ele.label}`, color: "white", mb: 1, m:2, width:"250px"}}> {ele.title}</Typography>
              )}
            </Card>
        </Popover>
      </div>
    );
  }