import React from 'react'

import { Link } from 'react-router-dom';

import './footer.styles.scss';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div>
                <h4>Copyright &#169; 2021 myfashionista</h4>
                <h4>Developed by Tushar</h4>
            </div>
            <div className='icons'>
                <a href="https://www.instagram.com/tushar_sahu_77/">
                    <InstagramIcon className='icon' />
                </a>

                <a href="https://www.linkedin.com/in/tushar-sahu-4772731a6/">
                    <LinkedInIcon className='icon' />
                </a>
                <a href="https://github.com/TusharSeven">
                    <GitHubIcon className='icon' />
                </a>

            </div>
        </div>
    )
}

export default Footer;