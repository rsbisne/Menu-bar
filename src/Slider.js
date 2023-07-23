import React from "react";
import "./index.css";
const Slider = () => {
  return (
    <div className="container">
      <div className="tabs">
        <input type="radio" id="radio-1" name="tabs" defaultChecked="" />
        <label className="tab" htmlFor="radio-1">
          Upcoming<span className="notification">2</span>
        </label>
        <input type="radio" id="radio-2" name="tabs" />
        <label className="tab" htmlFor="radio-2">
          Development
        </label>
        <input type="radio" id="radio-3" name="tabs" />
        <label className="tab" htmlFor="radio-3">
          Completed<span className="notification">3</span>
        </label>
        <span className="glider" />
      </div>
    </div>
  );
};

export default Slider;
