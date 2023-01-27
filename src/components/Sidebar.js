import React from 'react'
import CreateEventButton from "./CreateEventButton"
export default function Sidebar() {
  return (
    <aside style={{border:'0.1 solid grey', padding:5, width:64}}>
      <CreateEventButton/>
    </aside>
  )
}
