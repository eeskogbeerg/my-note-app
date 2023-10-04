import { useState, useEffect } from 'react';

const customStyle ={
  color: "white",
  fontSize: "20px",
  
}

function Time(){
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <span style={customStyle}>
      {date.toLocaleTimeString()}
    </span>
  );
}
export default Time;