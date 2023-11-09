import React from 'react';
import './navbar.css';
import logo from '../../assets/logo3.png';
import contactImg from '../../assets/contactImg.png';
import { Link } from 'react-scroll';
import { useEffect } from 'react';
import { useState } from 'react';
import menu from '../../assets/list.png';


const Navbar = () => {
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        document.querySelector('.navbar').style.boxShadow = "7px 7px 21px #0c101a, -7px -7px 21px #202a48";
      } else {
        document.querySelector('.navbar').style.boxShadow = "none";
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <nav className="navbar">
      <img src={logo} alt='Logo' className='logo' />
      <div className="desktopMenu">
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Home</Link>
      <Link activeClass='active' to='portfolios' spy={true} smooth={true} offset={-120} duration={500} className='desktopMenuListItem'>Portfolios</Link>
      <div className='desktopMenuListItem dropdown'>
        Case Studies
        <div className="dropdown-content">
          <a href="https://drive.google.com/file/d/1-Ag0e_Ucg3QarL_-KGK7qJyvjgG1Yhci/view?usp=drive_link" class="button-link">Student Well-Being Hub</a>
          <a href="https://drive.google.com/file/d/1KJqZDf4aLOJK69UDKYcXU-43DCacDx9i/view?usp=drive_link" class="button-link">Salon Clinic Appointment and Scheduling</a>
          {/* Add more case study items here */}
        </div>
      </div>
    </div>
    
      <button className='desktopMenuBtn' onClick={() => {
      document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactImg} alt='' className='desktopMenuImg' />Contact Us
      </button>
      <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
      <Link activeClass='active' to='portfolios' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolios</Link>
      <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
      <div className='casestudy'>Case Studies</div>
      <div className='casestudies'>
      <ul>
          <li>
            <a href="https://drive.google.com/file/d/1-Ag0e_Ucg3QarL_-KGK7qJyvjgG1Yhci/view?usp=drive_link" className='listItem' onClick={() => setShowMenu(false)}>Student Well-Being Hub</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1KJqZDf4aLOJK69UDKYcXU-43DCacDx9i/view?usp=drive_link" className='listItem' onClick={() => setShowMenu(false)}>Salon Clinic Appointment and Scheduling</a>
          </li>
          {/* Add more case study items here */}
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar