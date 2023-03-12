import React from "react";

import "./Card.less";

const Card = (props: any) => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
