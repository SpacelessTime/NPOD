import React from "react";
import {Link} from 'react-router-dom'
const Header = ({ date }) => {
    return ( 
<div className="header"> 
<h1 className ='headerTitle'>Astronomy Photo Of the Day</h1>
<div className="aboutMeLink"><Link to='/about'> about me</Link></div>
<h2 className="date">{date}</h2>
</div>
)
}

export default Header;