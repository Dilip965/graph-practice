import React, { useState, useEffect } from 'react';

const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center', fontSize: '2em', padding: '20px' }}>
      <h1>Real-Time Clock</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default RealTimeClock;
