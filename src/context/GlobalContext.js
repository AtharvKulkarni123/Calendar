import React from "react";

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index)=>{ },
    showEventModel: false,
    setShowEvent: ()=>{},
    daySelected: null,
    setDaySelected: (day)=>{},
    dispatchCalEvent: ({type, payload})=>{},
    savedEvents: [],
    selectedEvent: null,
    setSelectedEvents: ()=>{},
});
export default GlobalContext;