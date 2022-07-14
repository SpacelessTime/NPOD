import React from "react";
const Footer = ({ date, title  }) => {
    return (
    <div className="footer">
        <h5 className="copyright">{title}, {date}</h5>
    </div>
 )}
export default Footer;