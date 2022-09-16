import React,{useState} from 'react';
import './App.css';
import Component from './component';


export default function App() {
  let[count,setCount]=useState(0)
  let[time,setTime]=useState(true)
  return (
    <div className={time?'daylight':'nightlight'}>
      <h1 className='heading'>Good {time?'Morning':'Night'}</h1>
<div className='val'><Component num={count}/></div>
<div className='btn'>
<button className='inc' onClick={()=>
setCount(++count)}>
Increase
</button>
<button className='res' onClick={()=>
setCount(count=0)}>
Reset
</button>
<button className='dec' onClick={()=>
setCount(--count)}>
Decrease
</button>
<div>
<button className='light' onClick={()=>
setTime(!time)}>Update Day Time</button>
</div>
</div>
    </div>
    
    
  );
}

