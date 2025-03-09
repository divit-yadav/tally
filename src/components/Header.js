import React from 'react';
import bugreporticon from "../assets/bugreporticon.svg"
import modetoggleicon from "../assets/modetoggleicon.svg"

const Header = () => {
  return (
    <div className="headerbox">
      <img src= {bugreporticon}/>
      <h2>
        ta<span className="red-letters">ll</span>y
      </h2>
      <img src= {modetoggleicon}/>
    </div>
  );
};

export default Header;
