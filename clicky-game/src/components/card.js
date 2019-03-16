import React from "react";

const cardStyle = {
    height: "250px",
    width: "250px"
}

function Card(props) {
    return (
        <div className="card bg-dark m-2" style={cardStyle} {...props} />
    );
}

export default Card;