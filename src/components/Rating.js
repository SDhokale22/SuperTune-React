import React from "react";

const Rating = ({stars}) => {
    return <div className="rating">
      {[...new Array(Math.round(stars <= 5 ? stars : 0)).keys()].map(v => (<div className="star" key={v} />))}     
    </div>;
};

export default Rating;
