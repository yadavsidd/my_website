
import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
   <footer className='footer'>
    <div className='footer__container container'>
        <h1 className='footer__title'>Siddhant</h1>
        <ul className='footer__list'>
            <li>
                <a href='#about' className='footer__link'>About</a>
            </li>

            <li>
                <a href='#portfolio' className='footer__link'>Projects</a> 
            </li>

            <li>
                <a href='#skills' className='footer__link'>Skills</a> 
            </li>
        </ul>

        <div className='footer__social'>
        <a href='https://www.linkedin.com/in/siddhant-yadav-278b8522a/' className='footer__social-link' target='_blank'>
        <i class="bx bxl-linkedin"></i>
        </a>

        <a href='https://x.com/zesty_bear_' className='footer__social-link' target='_blank'>
        <i class="bx bxl-twitter"></i>
        </a>

        <a href='https://github.com/yadavsidd' className='footer__social-link' target='_blank'>
        <i class="bx bxl-github"></i>
        </a>
        </div>
        <span className='footer__copy'>
            &#169;Siddhant. All rights reserver
        </span>
    </div>
   </footer>
   
  )
}

export default Footer
