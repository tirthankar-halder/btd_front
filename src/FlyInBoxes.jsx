import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner"; // Import spinner
import "./FlyInBoxes.css";

const FlyInBoxes = ({fetchedMessages}) => {
  const [messages, setMessages] = useState([]);
  const [visibleBoxes, setVisibleBoxes] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setMessages(fetchedMessages);
      setVisibleBoxes(Array.from({ length: fetchedMessages.length }, (_, i) => i));
      setLoading(false); // Data fetched, stop loading
    }, 2); // Simulate network delay
  }, []);

  const handleRemove = (index) => {
    setVisibleBoxes((prev) => prev.filter((i) => i !== index));
  };

  if (loading) {
    return <LoadingSpinner />; // Show spinner while loading
  }

  return (
    <div className="container">
      {visibleBoxes.map((boxIndex, index) => (
        <div
          key={boxIndex}
          className="fly-in-box"
          style={{ top: `${index * 10}px`, animationDelay: `${index * 0.5}s` }}
        >
          <p className="box-description">{messages[boxIndex]}</p>
          <button className="close-btn" onClick={() => handleRemove(boxIndex)}>
            ❌
          </button>
        </div>
      ))}
    </div>
  );
};

export default FlyInBoxes;
