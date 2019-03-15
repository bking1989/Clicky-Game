import React from "react";

const cardStyle = {
    height: "250px",
    width: "250px"
}

function Card(props) {
    return (
        <div className="card bg-dark m-2" style={cardStyle} data-value={props.value} {...props} />
    );
}

export default Card;