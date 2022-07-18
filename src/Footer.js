import React from "react";

const Footer = ({ date, title  }) => {
    return (
    <div className="body"><div className="footer">
            <h5 className="copyright">{title}, {date}</h5> 
             <a className="photoLink" href='https://profwebsite.vercel.app/'>Checkout my photography here!</a>
</div>
                                 
</div>

 )}
export default Footer;