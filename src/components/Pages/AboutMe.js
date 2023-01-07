import React, { useEffect } from 'react';
import '../AboutMe.css';
import myPic from '../images/profile-img.JPG';
import Aos from 'aos';
import "aos/dist/aos.css";

function AboutMe() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div className='about-me'>
        <div className='about-img-box'>
            <div className='about-me-pic'><img  src={myPic} alt='myPic' /></div>
            <div className='check'>check my profile on <a href='https://www.linkedin.com/in/kehinde-akinola-b32aa0229/'>Linked<i className='fa fa-linkedin'></i></a></div>
        </div>

        <div data-aos='slide-up' className='about-me-content'>
            <h1 className='about-me-head'>Akinola Kehinde, Frontend Developer</h1>
            <p className='about-me-p1'>A meticulous web developer with wealth of experience as a front-end developer in responsive web designing.</p>
            <p className=''>Kehinde is a detailed front-end developer, well versed in the use of HTML, CSS/Tailwind-css, JavaScript and React JS in creating responsive websites. He has hands-on experience maintaining, optimizing, troubleshooting, and improving websites. He is an ardent advocate for continous learning, studying and mastering of new tools to produce the best results. He is a team player with capacity to perform optimally under little or no supervision in achieving indelible results. He constantly pushes himself to deliver tasks under very tight schedule and timeline. He has mastery of code versioning tools such as Git and Github.</p>
        </div>
    </div>
  )
}

export default AboutMe