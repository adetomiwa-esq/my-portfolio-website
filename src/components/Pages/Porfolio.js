import React, { useEffect } from 'react';
import '../Portfolio.css';
import Artsy from '../images/artsy.png';
import Spotify from '../images/spotifyClone.png';
import Realty from '../images/homeRentals.png';
import Detail from '../images/detail.png';
import Food from '../images/food.png';
import Aos from 'aos';
import "aos/dist/aos.css";

function Porfolio() {

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])
  const myProjects = [
    {
      imgSrc: Detail, link: 'https://ade-details.netlify.app', appName: 'Ade-s Detail', type: 'Detail App', tools: ['React', 'Typescript', 'Tailwind-css', 'Redux-toolkit']
    },
    {
      imgSrc: Realty, link: 'https://main--home-rentals-agency.netlify.app/', appName: 'Home Rentals', type: 'Realty website', tools: ['React', 'Typescript', 'Tailwind-css', 'AOS']
    },
    {
      imgSrc: Artsy, link: 'https://adetomiwa-esq-artsy-web-app.netlify.app', appName: 'Artsy web app', type: 'E-commerce website', tools: ['React', 'Tailwind-css']
    },
    {
      imgSrc: Spotify, link: 'https://adetomiwa-esq.github.io/my-react-spotify-clone', appName: 'Spotify Clone', type: 'Music App', tools: ['React', 'Deezer API', 'CSS']
    },
    {
      imgSrc: Food, link: 'https://busayo-project.netlify.app', appName: 'Food proj', type: 'Food App', tools: ['React', 'Tailwind-css',]
    },
  ]

  return (
    <div className='portfolio'>
      <div className='projects'>
        {
          myProjects.map((project, index) => {
            return <div data-aos='flip-left' className='my-project' key={index}>
              <a href={project.link}>
                <img src={project.imgSrc} alt='projImg'/>
                <div className='proj-description'>
                  <h1>{project.appName}</h1>
                  <div>{project.type}</div>
                </div>
                <div className='tools'>
                  {
                    project.tools.map(tool => {
                      return <div>{tool}</div>
                    })
                  }
                </div>
              </a>
             </div>
          })
        }
      </div>
      <div className='check-github'>Check my Github <a href='https://github.com/adetomiwa-esq'>@Adetomiwa-esq</a> for more projects.</div>
    </div>
  )
}

export default Porfolio