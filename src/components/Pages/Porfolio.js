import React, { useEffect } from 'react';
import '../Portfolio.css';
import Artsy from '../images/artsy.png';
import Spotify from '../images/spotifyClone.png';
import Aos from 'aos';
import "aos/dist/aos.css";

function Porfolio() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  const myProjects = [
    {
      imgSrc: Artsy, link: 'https://adetomiwa-esq-artsy-web-app.netlify.app', appName: 'Artsy web app', type: 'E-commerce website'
    },
    {
      imgSrc: Spotify, link: 'https://adetomiwa-esq.github.io/my-react-spotify-clone', appName: 'Spotify Clone', type: 'Music App'
    }
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
              </a>
             </div>
          })
        }
      </div>
    </div>
  )
}

export default Porfolio