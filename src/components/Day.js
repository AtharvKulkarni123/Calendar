import React from 'react'

export default function Day({day,key}) {
    console.log(day,'dayyyyy',key)
  return (
    <div key={key}>
        {day.format()}
    </div>
  )
}
