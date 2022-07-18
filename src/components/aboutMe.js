import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/aboutMe.css'
import img1 from '../assets/BZVT9689.JPG'
import img2 from '../assets/FOSI8024.JPG'
import img3 from '../assets/OLKP4872.JPG'
export default function AboutMe() {
    return(<div className='body'>

   <h1> <Link to='/'>Back to NPOD</Link> </h1>
       
    <div className='mainSect'>Hi , I'm Julian Petrisky. I'm a 20 year old FullStack Engineer from North Carolina currently attending Bloom Institute of Technology.  
                                    I have 2 dogs and 2 cats and I like to spend my free time with friends 
                                        or trying to experiment with different things on my websites. 
                              This Astronomy Photo of the day page is one of my projects that I've been working on, Using the NASA's astronomy picture of the day API 
                                and an inspirational quote api, i've built a cool way to appreciate Space and Literature
                                
                            <div className='subSect'>I'm currently looking to join a team of other developers where I can fit in and learn from my peers while offering my skills along with my own perspective 
                                and thoughts
                                </div>
<div className='imgRow'> <img  src={img1} alt='sunset'/> <img  src={img2} alt='sunset'/> <img  src={img3} alt='sunset'/></div>
                            
                            Feel free to reach out for questions or opportunities at these links:
                            <ul>
                            <li>email: jpetrisky66@gmail.com</li>
                           <li> github: <a  href='https://github.com/SpacelessTime' target='_blank' rel='noopener noreferrer'>SpacelessTime</a></li>
                           <li>  linkedin: <a  target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/julian-p66/'>Julian Petrisky</a> </li>
                           <li> My photography page: <a  target='_blank' rel='noopener noreferrer' href='https://profwebsite.vercel.app/'> Photography</a></li>
                            </ul>
    </div>


    <h2> <Link to='/'>Back to NPOD</Link> </h2>


    </div>)
}