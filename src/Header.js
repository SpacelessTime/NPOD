import React from "react";
import {Link} from 'react-router-dom'
const Header = ({ date }) => {
    return ( 
<div className="header"> 
<h1 className ='headerTitle'>Astronomy Photo Of the Day</h1>
<h2 className="date">{date}</h2>
<div><Link className="aboutMeLink" to='/about'>Learn more about me</Link></div>
</div>
)
}

export default Header;