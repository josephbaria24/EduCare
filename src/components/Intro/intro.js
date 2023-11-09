import React from 'react';
import './intro.css';
import bg from '../../assets/bgs.svg';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className="hello">Good day!</span>
        <span className="introText"><span class="introName">EduCare</span> <br />showcase team.</span>
        <p className="introPara">Step into a world of collaborative learning and community engagement.<br /> Experience the fusion of design and functionality,<br /> empowering students within an innovative digital space.</p>
      </div>
      <div className="container">
        <img src={bg} alt="Profile" class="bg" />
      </div>
    </section>
    
  )
}

export default Intro