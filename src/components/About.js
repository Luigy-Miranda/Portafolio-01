import React from 'react'

import Foto from '../../public/images/me.jpg';
import Foto2 from '../../public/images/you.png';

const About = () => {
    const [header] = React.useState({
        subHeader: 'Sobre nosotros',
        mainContent: 'Somos estudiantes de la facultad de Ingeniería de la Universidad Estatal de Milagro y estudiamos la carrera de Ingeniería en Software. Nuestro meta como futuros Ingenieros es dar lo mejor de nosotros en el ambiente laboral, tanto como la responsabilidad, lealtad y honestidad a lo que hagamos. Nuestro principal desempeño es el Área de informática con conocimientos de logística en programación en leguajes como PHP, Python, C#, C++, HTML, Css, Java, Fox Pro, Visual Basic y administración de base de datos.'
    });


    return (

        <div className='about' id="about">
            <div className='container'>
                <div className='row d-flex '>
                    <div className="col-12 mainHeader">
                        <div className='commonBorder'></div>
                        <h1>{header.subHeader}</h1>
                        <div className='commonBorder'></div>
                    </div>
                    <div className="col-12 col-lg-3 mx">
                        <img className='imgAbout' src={Foto} alt={header.mainContent} />
                        <h4>Luigy Miranda</h4>
                    </div>
 
                    <div className="col-12 col-lg-6 mx">
                        <div className='common'>
                            <p className='mainContent'>{header.mainContent}</p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 mx">
                        <img className='imgAbout' src={Foto2} alt={header.mainContent} />
                        <h4>Debbie Engracia</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About