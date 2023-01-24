import React, {useState ,useContext, useEffect} from "react";
import { getMonth } from "./utils/util";
import CalenderHeader from './components/CalenderHeader'
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
function App() {
  const[currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex} = useContext(GlobalContext);
  useEffect(()=>{
    setCurrentMonth(monthIndex)
  }, [monthIndex])
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
