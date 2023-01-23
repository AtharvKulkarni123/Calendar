import React, {useState} from "react";
import { getMonth } from "./utils/util";
import CalenderHeader from './components/CalenderHeader'
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
function App() {
  const[currentMonth, setCurrentMonth] = useState(getMonth());
  return (
    <React.Fragment>
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
