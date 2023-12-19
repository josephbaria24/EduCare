import React, { useState } from 'react';
import './portfolios.css'; // Import your CSS file for styling
import profile1 from '../../assets/image.png'
import profile2 from '../../assets/nick2.png'
import profile3 from '../../assets/kyla.png'

  
  const Portfolios = () => {
    return (
      <section id='portfolios'>
        <span className="about-us-header">About Us</span>
        <div className='columns'>
        <div className="column">
          <img src={profile1} alt="Profile" className='img' />
            <div className='info'>
            <h2>Joseph Baria</h2> 
            <p>
            Greetings! I'm Joseph, a UI/UX advocate 
            devoted to crafting designs that prioritize 
            user delight. Step into my portfolio and witness 
            how each pixel contributes to a seamless user 
            journey.
            </p>
            <div className='download'>
          <a href='https://drive.google.com/file/d/1fMa_gSuIg9YIAbcz0H_-gbxYgGNWmv8R/view?usp=drive_link' download="JosephCv.pdf">Download Cv</a>
            </div>
          </div>
          
        </div>

        <div className="column">
          <img src={profile2} alt="img" />
            <div className='info'>
            <h2>Nick Martinez</h2>
              <p>
            This is Nick Martinez, a passionate
            System Analyst with deep IT
            knowledge, adept at problem-solving,
            software development, and process
            optimization, focusing on user-centric
            design and transforming complex
            requirements into intuitive
            applications.
            </p>
            <div className='download'>
            <a href="https://drive.google.com/file/d/1rdTFCNeSS5JyvnOyyL_rOXHKMXKt3a-U/view?usp=drive_link" download="NickCv.pdf">Download Cv</a>
            </div>
            </div>
            
        </div>
        <div className="column">
          <img src={profile3} alt="img" />
            <div className='info'>
            <h2>Kyla Pagkaliwangan</h2>
              <p>
            I am Kyla Pagkaliwangan, enthusiastic data analyst with a keen eye for uncovering insights and a commitment to transforming raw data into actionable intelligence. My proficiency in data analysis, statistical modeling, and data visualization empowers organizations to make informed decisions and drive strategic initiatives.
            </p>
            <div className='download'>
            <a href="#">Download Cv</a>
            </div>
            </div>
            
        </div>
      </div>
      </section>
    );
  };
  


export default Portfolios;
