import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Carousel = () => {
  const [selectedCard, setSelectedCard] = useState("c1");

  // Array of image URLs
  const images = {
    c1: "/chatbot.jpg",
    c2: "/analyzer.jpg",
    c3: "/courses.jpg",
    c4: "/quiz.jpg",
  };

  const cardStyle = (isActive, image) => ({
    width: isActive ? "80%" : "20%",
    height: "80%",
    borderRadius: "2rem",
    backgroundSize: "cover",
    backgroundImage: `url(${image})`,
    cursor: "pointer",
    overflow: "hidden",
    margin: "50px 10px",
    display: "flex",
    alignItems: "flex-end",
    transition: "0.6s cubic-bezier(0.28,-0.03,0,.99)",
    boxShadow: "0px 10px 30px -5px rgba(0,0,0,0.8)",
    backgroundColor: "#ddd",
  });

  const descriptionStyle = (isActive) => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    overflow: "hidden",
    height: "20%",
    width: "100%",
    opacity: isActive ? 1 : 0,
    transform: isActive ? "translateY(0)" : "translateY(30px)",
    transition: "all 0.3s ease",
    background: "rgba(0,0,0,0.5)", // Add background for better readability
    color: "#fff",
    padding: "20px",
    boxSizing: "border-box",
  });

  const iconStyle = {
    background: "#223",
    color: "white",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "15px",
  };

  // Auto-scrolling effect
  useEffect(() => {
    const cardList = ["c1", "c2", "c3", "c4"];
    let index = cardList.indexOf(selectedCard);

    const interval = setInterval(() => {
      index = (index + 1) % cardList.length; // Cycle through cards
      setSelectedCard(cardList[index]);
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [selectedCard]);

  return (
    <div className="d-flex" style={{ height: "100vh", overflow: "hidden" }}>
      {/* Carousel Container */}
      <div className="d-flex flex-nowrap" style={{ width: "75%", height: "100%" }}>
        {["c1", "c2", "c3", "c4"].map((cardId) => (
          <input
            key={cardId}
            type="radio"
            name="slide"
            id={cardId}
            className="d-none"
            checked={selectedCard === cardId}
            onChange={() => setSelectedCard(cardId)}
          />
        ))}

        {["c1", "c2", "c3", "c4"].map((cardId) => (
          <label
            key={cardId}
            htmlFor={cardId}
            style={cardStyle(selectedCard === cardId, images[cardId])}
            className="d-flex"
          >
            <div className="d-flex row">
              <div style={iconStyle}>{cardId.slice(-1)}</div>
              <div style={descriptionStyle(selectedCard === cardId)}>
                <h4>{cardId === "c1" ? "Chatbot" : cardId === "c2" ? "Performance Analyzer" : cardId === "c3" ? "Courses" : "Quiz"}</h4>
                <p>{cardId === "c1" ? "We have chatbot that clears doubts" : cardId === "c2" ? "It analyzes the student performance" : cardId === "c3" ? "We provide variety of courses to learn" : "We have fun time Quiz activities"}</p>
              </div>
            </div>
          </label>
        ))}
      </div>

      {/* Text Content Container */}
      <div style={{ width: "25%", padding: "20px", backgroundColor: "#f8f9fa", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div>
          <h1 style={{ color: 'black', fontFamily: 'fantasy' }}>Explore US...</h1>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
