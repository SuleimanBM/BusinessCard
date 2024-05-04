import React from "react";
import star from "../assets/star.svg";
import fork from "../assets/fork.svg";

export default function Nav() {
  return (
    <div className="nav--container">
        <div class="github">
          <a href="https://github.com/joeokat/JoeOkat.me" target="_blank" rel="noreferrer">
            <img src={star} alt=""/> Star
          </a>
          <a href="https://github.com/joeokat/JoeOkat.me" target="_blank" rel="noreferrer">
            <img src={fork} alt=""/> Fork
          </a>
        </div>
        
        <h3 className="logo">JoeOkat 💙  <span> <small>beta version 2.0</small></span></h3>
    </div>
  );
}
