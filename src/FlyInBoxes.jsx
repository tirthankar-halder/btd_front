import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner"; // Import spinner
import "./FlyInBoxes.css";

const FlyInBoxes = () => {
  const [messages, setMessages] = useState([]);
  const [visibleBoxes, setVisibleBoxes] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const fetchedMessages = [
        "API Message 1",
        "API Message 2",
        "API Message 3",
        "API Message 4",
        "API Message 5",
      ];
      setMessages(fetchedMessages);
      setVisibleBoxes(Array.from({ length: fetchedMessages.length }, (_, i) => i));
      setLoading(false); // Data fetched, stop loading
    }, 2000); // Simulate network delay
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
          style={{ top: `${index * 10}px`, animationDelay: `${index * 0.2}s` }}
        >
          <span className="box-text">Box {boxIndex + 1}</span>
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
