import React from "react";
const Header = ({ date }) => {
    return ( 
<div className="header"> 
<h1 className ='headerTitle'>Astronomy Photo Of the Day</h1>

<h2 className="date">{date}</h2>
</div>
)
}

export default Header;