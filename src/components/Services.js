import React from 'react';

import { FaGithub, FaGgCircle, FaChalkboardTeacher } from "react-icons/fa";

const Services = () => {
    const [header] = React.useState({
        mainHeader: 'Nuestros Servicios',
        subHeader: '',
        mainContent: "Ofrecemos servicios y asesoramiento de primera complementadas con las mas optimas tecnicas."
    });

    const [state] = React.useState([
        {
            id: 1,
            icon: <FaGithub className='commonIcons' />,
            heading: 'DESARROLLO DE SOFTWARE',
            textService: 'Desarrollo y producción de aplicaciones.'
        },
        {
            id: 2,
            icon: <FaGgCircle className='commonIcons' />,
            heading: 'DISEÑO',
            textService: 'Diseño y creación de sitios web modernos y profesionales.'
        },
        {
            id: 3,
            icon: <FaChalkboardTeacher className='commonIcons' />,
            heading: 'ASESORIOS',
            textService: 'Brindo asistencia remota o colaboraciones online.'
        }
    ]);

    return (


        <div className='services' id="services">
            <div className='container'>
                <div className='row d-flex'>

                    <div className="col-12 mainHeaderServices">
                        <div className='commonBorder'></div>
                        <h1>{header.mainHeader}</h1>
                        <div className='commonBorder'></div>
                    </div>


                    <div className="col-12 centerContent">
                        <div className='common'>
                            <p className='mainContentServices'>{header.mainContent}</p>
                        </div>
                    </div>


                    <div className="col-12">
                        <div className='container'>
                            <div className='row'>

                            {state.map(info => (
                                    <div className='colu-4'>
                                        <div className='services__box'>

                                            <div>{info.icon}</div>
                                            <div className='services__box-header'>{info.heading}</div>
                                            <div className='services__box-p'>{info.textService}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Services;