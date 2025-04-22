import React, { useState, useEffect } from 'react';

const Ticket = () => {
  const [ticketStatus, setTicketStatus] = useState('Inactive');
  const [currentTime, setCurrentTime] = useState(new Date());
  const ticketImage = 'https://via.placeholder.com/150';  // Replace with your actual image URL

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      const currentHours = now.getHours();
      const currentMinutes = now.getMinutes();
      const currentSeconds = now.getSeconds();

      // If it's exactly 12:00 PM, the ticket becomes active
      if (currentHours === 12 && currentMinutes === 0 && currentSeconds === 0) {
        setTicketStatus('Active');
      } 
      // If it's between 12:00 PM and 12:45 PM (before 12:45:00)
      else if (currentHours === 12 && currentMinutes < 45) {
        setTicketStatus('Active');
      } 
      // If it's 12:45:00 or after, the ticket expires
      else if (currentHours === 12 && currentMinutes === 45 && currentSeconds === 0) {
        setTicketStatus('Expired');
      } 
      // After 12:45 PM, the ticket is expired
      else if (currentHours === 12 && currentMinutes > 45) {
        setTicketStatus('Expired');
      }
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center', fontSize: '2em', padding: '20px' }}>
      <h1>Ticket Status</h1>
      <p>Current Time: {currentTime.toLocaleTimeString()}</p>
      <p>Ticket is: {ticketStatus}</p>
      
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img 
          src={ticketImage} 
          alt="Ticket" 
          style={{ 
            width: '150px', 
            height: '150px', 
            borderRadius: '8px', 
            transition: 'opacity 0.3s ease', 
            opacity: ticketStatus === 'Expired' ? 0.5 : 1 
          }} 
        />
        {ticketStatus === 'Expired' && (
          <svg
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              pointerEvents: 'none' 
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <line
              x1="10" y1="10" x2="90" y2="90"
              stroke="red" strokeWidth="3" strokeLinecap="round"
              strokeDasharray="4"
            />
            <line
              x1="90" y1="10" x2="10" y2="90"
              stroke="red" strokeWidth="3" strokeLinecap="round"
              strokeDasharray="4"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Ticket;
