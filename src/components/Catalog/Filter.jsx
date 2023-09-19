import React from "react";

const Filter = () => {
  return (
    <div className="container-horisontal">
      <ul className="container-horisontal filter">
        <li className="container-horisontal">
          <label className="container-horisontal text" name="category">
            <input
              type="radio"
              name="category"
              value="All"
              defaultChecked={true}
              className="filter__input"
            />
            <span className="container-horisontal text filter__item">All</span>
            
          </label>
        </li>
        <li className="container-horisontal">
          <label className="container-horisontal text" name="category">
            <input
              type="radio"
              name="category"
              value="Balls"
              className="filter__input"
            />
            <span className="container-horisontal text filter__item">Balls</span>
          </label>
        </li>
        <li className="container-horisontal">
          <label className="container-horisontal text" name="category">
            <input
              type="radio"
              name="category"
              value="Balls"
              className="filter__input"
            />
            <span className="container-horisontal text filter__item">Balls</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
