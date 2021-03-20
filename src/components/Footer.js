import React from 'react'
import { FaFacebook, FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';


const Footer = () => {

    return (
        <div className='footer'>
            <div className='container'>
                <div className='footerSection'>
                    <div className='footerSection-logo'></div>
                    <div className='row informationFootfer justifyContent'>
                        <div>
                            COPYRIGHT © Luigy Miranda 2021. Todos los derechos reservados.
                        </div>
                        <div className='aboutCircles'>
                            <ul className='footer__ul'>
                                <a href="https://www.linkedin.com/in/luigymiranda12/" target='_blank'>
                                    <li><FaLinkedinIn /></li>
                                </a>
                                <a href="https://www.facebook.com/01101100L/" target='_blank'>
                                    <li><FaFacebook /></li>
                                </a>
                                <a href="https://github.com/Luigy-Miranda" target='_blank'>
                                    <li><FaGithubAlt /></li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer