import React from "react";

function CreateArea(props) {
  return (
    <div className="card">
      <img src={props.src} class="card-img-top" alt="" />
      <div className="card-body">
        <p className="card-text">{props.title}</p>
      </div>
    </div>
  );
}

export default CreateArea;
