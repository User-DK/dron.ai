import React, { useState, useEffect } from "react";
import { IconHourglassEmpty } from "@tabler/icons-react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div style={styles.container}>
      <IconHourglassEmpty size={48} color="black" />
      <div style={styles.timerText}>
        {Math.floor(seconds / 60)}:
        {seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "24px",
    fontFamily: "Arial, sans-serif",
  },
  timerText: {
    fontWeight: "bold",
  },
};

export default Timer;
