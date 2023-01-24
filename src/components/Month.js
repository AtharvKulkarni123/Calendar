import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import Day from "./Day";

export default function Month({ month }) {
  useEffect(() => {
  }, []);
  return (
    <Box sx={{ flexGrow:1 }} >
      {month.map((ele, idx) => {
        return (
          <Grid key={idx}  container>
            {ele.map((day, i) => {
              return (
                <Grid item sx={{height:'19.5vh'}} lg={1.7142857} key={i}>
                  <Day day={day} rowIdx={idx}/>
                </Grid>
              );
            })}
          </Grid>
        );
      })}
    </Box>
  );
}