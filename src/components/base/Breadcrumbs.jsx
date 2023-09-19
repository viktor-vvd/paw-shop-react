import React from "react";
import { Link, useMatches } from "react-router-dom";

const Breadcrumbs = () => {
  let matches = useMatches();
  let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));
  console.log(crumbs);

  return (
    <ul className="container-horisontal outer__container breadcrumbs">
      {crumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          {index < crumbs.length - 1 ? (
            <Link to={crumb.path} className="text breadcrumbs__item">
              {crumb.name}
            </Link>
          ) : (
            <span className="text breadcrumbs__item breadcrumbs__item_active">
              {crumb.name}
            </span>
          )}
          {index < crumbs.length - 1 && (
            <span className="text breadcrumbs__item">{">"}</span>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
