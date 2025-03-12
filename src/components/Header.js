import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import bugreporticon from "../assets/bugreporticon.svg";

const Header = () => {
  const moonRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!moonRef.current) return;
    const moonPath = moonRef.current.querySelector("path");
    if (!moonPath) return;

    const handleMouseEnter = () => {
      if (!isMobile) {
        setShowTooltip(true);
        gsap.set(moonPath, { fill: "transparent" }); // Ensure it's set before animation
        gsap.to(moonPath, { duration: 0.5, fill: "black" });
      }
    };

    const handleMouseLeave = () => {
      if (!isMobile) {
        setShowTooltip(false);
        gsap.to(moonPath, { duration: 0.5, fill: "transparent" });
      }
    };

    moonRef.current.addEventListener("mouseenter", handleMouseEnter);
    moonRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (moonRef.current) {
        moonRef.current.removeEventListener("mouseenter", handleMouseEnter);
        moonRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);

  const handleClick = () => {
    if (isMobile) setShowTooltip(!showTooltip);
  };

  return (
    <div className="headerbox">
      <img src={bugreporticon} alt="Bug Report Icon" />
      <h2>
        ta<span className="red-letters">ll</span>y
      </h2>

      <div className="tooltip-container">
        <svg
          ref={moonRef}
          onClick={handleClick}
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: "pointer" }}
        >
          <g opacity="0.8">
            <path
              d="M24 15C22.8065 16.1935 22.136 17.8122 22.136 19.5C22.136 21.1878 22.8065 22.8065 24 24C25.1935 25.1935 26.8122 25.864 28.5 25.864C30.1878 25.864 31.8065 25.1935 33 24C33 25.78 32.4722 27.5201 31.4832 29.0001C30.4943 30.4802 29.0887 31.6337 27.4442 32.3149C25.7996 32.9961 23.99 33.1743 22.2442 32.8271C20.4984 32.4798 18.8947 31.6226 17.636 30.364C16.3774 29.1053 15.5202 27.5016 15.1729 25.7558C14.8257 24.01 15.0039 22.2004 15.6851 20.5558C16.3663 18.9113 17.5198 17.5057 18.9999 16.5168C20.4799 15.5278 22.22 15 24 15Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>

        {showTooltip && (
          <div className="tooltip">
            <span>Dark Mode coming soon!</span>
            {isMobile && (
              <button className="close-btn" onClick={() => setShowTooltip(false)}>✖</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
