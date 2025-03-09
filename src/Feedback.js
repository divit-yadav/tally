import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import backIcon from "../assets/backIcon.svg";

const Feedback = () => {
  const navigate = useNavigate();

  return (
    <div className="feedback-container">
      <Header 
        title="Feedback" 
        titleSize="32px" 
        leftIcon={backIcon} 
        leftAction={() => navigate(-1)}
      />
      <h1>Give Us Your Feedback</h1>
      <textarea placeholder="Write your feedback here..." />
      <button>Submit</button>
    </div>
  );
};

export default Feedback;
