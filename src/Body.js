import React from "react";

const Body = ({ title, explanation, copyright, url,quote}) => {

   
    return(
    <div className="body-container">
        <h1 className = 'bodyTitle'> {title} </h1>
        <img className="image" src={url} alt={title} />
        <h3> By: {copyright} </h3>
        <p className="bodyText"> {explanation} </p>
    </div>
)
}

export default Body;