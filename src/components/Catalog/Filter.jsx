import React from "react";

const Filter = () => {
  return (
    <div className="container-horizontal">
      <ul className="container-horizontal filter">
        <li className="container-horizontal">
          <label className="container-horizontal text" name="filter">
            <input
              type="radio"
              name="filter"
              value="All"
              defaultChecked={true}
              className="filter__input"
            />
            <span className="container-horizontal text filter__item">All</span>
            
          </label>
        </li>
        <li className="container-horizontal">
          <label className="container-horizontal text" name="filter">
            <input
              type="radio"
              name="filter"
              value="Balls"
              className="filter__input"
            />
            <span className="container-horizontal text filter__item">Balls</span>
          </label>
        </li>
        <li className="container-horizontal">
          <label className="container-horizontal text" name="filter">
            <input
              type="radio"
              name="filter"
              value="Balls"
              className="filter__input"
            />
            <span className="container-horizontal text filter__item">Balls</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
