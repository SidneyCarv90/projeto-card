import React from "react";

export const Avatar = (props) => {
  return <img className="circle-img" src={props.imgURL} alt={props.name} />;
};
