import React, { useState } from "react";

function VideoLecture() {
  const [question, setQuestion] = useState("");

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the question submission logic here
    console.log("Question submitted:", question);
  };

  return (
    <div>
      <h1>Video Lecture</h1>
      <div className="style.video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="style.ask-ai-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="ai-question">Ask AI:</label>
          <input
            type="text"
            id="ai-question"
            value={question}
            onChange={handleInputChange}
            style={{ width: "40vh", height: "5vh" }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

const style = {
  videoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  askAiContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default VideoLecture;
