"use client";

import React, { useState, useEffect } from "react";

const DateTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  // Render nothing on the server side
  if (typeof window === "undefined") return null;

  return (
    <div>
      <p className="text-3xl">{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default DateTime;
