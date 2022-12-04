import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'

function Navbar() {

  useEffect(() => {
    const navLinks = document.querySelectorAll(".navlinks .top-links")
    navLinks.forEach(x => {
      x.addEventListener('click', changeActive)     
    });

    function changeActive(){
      navLinks.forEach(link => {
        link.classList.remove('active')
        this.classList.add('active')
      })
    }

    // const nav = document.querySelector('.nav')
    // window.onscroll = function(){
    //   if(window.pageYOffset >= nav.offsetTop){
    //     nav.classList.add('sticky')
        
    //   } else {
    //     nav.classList.remove('sticky')
    //   }
    // }
  },[])

  const [fix, setFix] = useState(false)

  function navToFix(){
    if(window.scrollY >= 10) {
      setFix(true);
    } else {
      setFix(false)
    }
  }

  window.addEventListener("scroll", navToFix)

  const [positive, setPositive] = useState(false)
  function toggle(){
    setPositive(prev => !prev)
  }

  function changePositive(){
    setPositive(false)
  }

  return (
    <div className={`nav ${fix ? 'sticky' : ''}`}>
      <div className='my-name'>
        A
        <span>detomiwa</span>
        <div className='mobile-toggle' onClick={toggle}>
          <i className={positive ? `fas fa-close` : `fas fa-bars`}></i>
        </div>
      </div>


      <ul className={`navlinks ${positive ? 'nav-slide-in' : ''}`}>
        <Link to='/my-portfolio-website' onClick={changePositive} className='top-links active'><li>Home</li></Link>
        <Link to='/aboutme' onClick={changePositive} className='top-links'><li>About Me</li></Link>
        <Link to='/' onClick={changePositive} className='top-links'><li>Portfolio</li></Link>
      </ul>


    </div>
  )
}

export default Navbar