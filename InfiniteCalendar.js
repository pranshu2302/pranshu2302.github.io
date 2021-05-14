import React,{useState} from 'react'
import ReactInfCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import PopUp from "./file.js"

function InfiniteCalendar(props) {
  const [view, setView] = useState(0);
  const handleChange=(e)=>{
     
          setView(1);
      
    }
  if(view===1){
    return(
      <div>
        <div className = 'oo1'>
        <ReactInfCalendar 
        width = {1536}
        height = {600}
        className = 'calendar'
        minDate = {new Date(1980, 0, 1)}
        rowHeight = {212}
        onSelect = {handleChange}
      />
      </div>
      <div className = "oo2">
        <PopUp setView={setView} />
      </div>
      </div>
    )
  }
  else{
    return (
        <div className='oo1'>
        <ReactInfCalendar 
        width = {1536}
        height = {600}
        minDate = {new Date(1980, 0, 1)}
        rowHeight = {217.03}
        className = 'calendar'
        onSelect = {handleChange}
      />
        </div>
    )
  }
}
export default InfiniteCalendar;