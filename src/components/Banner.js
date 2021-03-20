import React from 'react';
import { FaFacebook, FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';


const Banner = () => {
    const [state] = React.useState({
        title: 'Hola, Somos estudiantes de Ingenieria en Software',
        text: "Desarrollador",
        skill: 'Java - Python - Visual Basic - Fox Pro - C# - HTML - CSS -  Bootstrap - SQL Server - Git - Github - PHP  ',
        image: 'https://user-images.githubusercontent.com/60376045/98049840-7d899780-1dfe-11eb-9384-81c6fa5e7465.png'
    });
    return (
        <div>
            {/* <header className='header'> */}
            <div className='container-fluid header' id="banner">
                <div className='row'>
                    <div className='col-12'>
                        <div className='header__section'>
                            <ul className='header__ul'>
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
                            <h1>{state.title}</h1>
                            <p className="text__title">{state.text}</p>
                            <p className='text__skill'>{state.skill}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* </header> */}

        </div>
    )
}

export default Banner;