import React, {useState ,useContext, useEffect} from "react";
import { getMonth } from "./utils/util";
import CalenderHeader from './components/CalenderHeader'
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModel from "./components/EventModel";

function App() {
  const[currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex, showEventModel} = useContext(GlobalContext);
  useEffect(()=>{
    setCurrentMonth(getMonth( monthIndex))
  }, [monthIndex])
  return (
    <React.Fragment>
      {showEventModel && <EventModel/>}
      
      <div sx={{display:"flex", flexDirection:"column", width:"100"}}>
        <CalenderHeader />
      </div>
      <div className="" sx={{display:"flex", flexGrow:1}}>
          <Sidebar />
          <Month month = {currentMonth}/>
      </div>
    </React.Fragment>
  );
}

export default App;
