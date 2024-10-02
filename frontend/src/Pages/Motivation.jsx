import React from "react";
import { CardGradient } from "../components/Get Motivated/CardGradient";
import { IconRefresh } from "@tabler/icons-react";

const quotes = [
  {
    title: "Inspiration",
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    title: "Success",
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },
  {
    title: "Perseverance",
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    title: "Dreams",
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    title: "Innovation",
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
];

function Motivation() {
  const handleRefreshClick = () => {
    console.log("Refresh icon clicked!");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <IconRefresh
          style={{ fontSize: "48px", cursor: "pointer" }}
          onClick={handleRefreshClick}
        />
      </div>

      <div style={{display:"flex",gap:"10px"}}>
        {quotes.map((quote, index) => (
          <CardGradient key={index} {...quote} />
        ))}
      </div>
    </>
  );
}

export default Motivation;
