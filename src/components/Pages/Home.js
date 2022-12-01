import React from 'react';
import myPic from '../images/profile-img.JPG';
import '../Home.css';

function Home() {
  return (
    <div className='home-page'>
      <div className='home-body'>
        <div className='welcome'>
          <p className='hi'>Welcome,</p>
          <div className='intro'>
            <div className='name'>I'm Akinola Kehinde <span className='ade'>Adetomiwa</span></div>
            <div className='role'>Front-end Developer</div>
            <p className='brief-1'>
              Front-end developer with experience in the use of HTML, CSS/tailwind CSS, JavaScript and React JS in building websites and web applications.
            </p>
            <p className='brief-2'>I am skilled in the use of code versioning tools like Git and GitHub.</p>
            <p>I am currently improving at Node JS.</p>
            <div className='reach-me'>
              <a href='https://instagram.com/adetomiwa_akin?r=nametag'><i className='fa fa-instagram'></i></a>
              <a href='https://twitter.com/Adetomiwa_akin'><i className='fa fa-twitter'></i></a>
              <a href='https://github.com/adetomiwa-esq'><i className='fa fa-github'></i></a>
              <a href='https://www.linkedin.com/in/kehinde-akinola-b32aa0229/'><i className='fa fa-linkedin'></i></a>
            </div>
          </div>
        </div>

        <div className='my-image'>
          <div className='img-box'>
            <img src={myPic} alt='my pic' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home