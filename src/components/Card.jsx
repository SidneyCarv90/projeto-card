import React from "react";
import { Avatar } from "./Avatar";
import { Details } from "./Details";
import { Identificador } from "./Identificador";

export const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <Identificador id={props.id} />
        <h2 className="name">{props.name}</h2>
        <Avatar imgURL={props.imgURL} />
      </div>
      <div className="bottom">
        <Details detailInfo={props.tel} />
        <Details detailInfo={props.email} />
      </div>
    </div>
  );
};
