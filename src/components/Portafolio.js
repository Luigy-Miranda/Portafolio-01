import React from 'react';

import senescyt from '../../public/images/senescyt.jpg';
import crud from '../../public/images/crud.png';
import ciber from '../../public/images/ciber.jpg';
import juego from '../../public/images/juego.jpg';
import chat from '../../public/images/chat.png';
import maletas from '../../public/images/maletas.jpg';

const Portafolio = () => {

    const [header] = React.useState({
        mainHeader: 'Mis Proyectos',
        subHeader: '',
        mainContent: "Aqui varios proyectos que he realizado: "
    });

    const [state] = React.useState([
        {
            id: 1,
            imag: senescyt,
            heading: 'Simulador del SENECYT',
            textService: "Permite al usuario acceder a un examen parecido al del SENECYT con el fin de practicar para este.",
            url: 'https://github.com/Luigy-Miranda/SimuladorSENECYT'
        },
        {
            id: 2,
            imag: crud,
            heading: 'Sistema CRUD',
            textService: 'Sistema CRUD basico para usarlo de diferentes aplicativos. Escolar, Empresarial, etc.',
            url: 'https://github.com/Luigy-Miranda/Sistema_Crud'
        },
        {
            id: 3,
            imag: ciber,
            heading: 'Sistema CIBER',
            textService: 'Sistema destinado a gestionar y controlar los ingresos de un ciber. Articulos & Copias. ',
            url: 'https://github.com/Luigy-Miranda/ManagerCyberCafe'
        },
    ]);

    const [state2] = React.useState([
        {
            id: 1,
            imag: juego,
            heading: 'Juego en PHP',
            textService: 'Juego de piedra, papel y tijera desarrollado netamente en el luenguaje de programacion PHP',
            url: 'https://github.com/Luigy-Miranda/Juego'
        },
        {
            id: 2,
            imag: chat,
            heading: 'Chat con FireBase',
            textService: 'Chat con distintas tegnologias para simular un chat con cuentas en distintas partes del mundo.',
            url: 'https://github.com/Luigy-Miranda/Chat'
        },
        {
            id: 3,
            imag: maletas,
            heading: 'Tienda de Maletas',
            textService: 'Tienda de Maletas por categoria, gestor de vestas y vistas. Desarrollado en React.',
            url: 'https://github.com/Luigy-Miranda/Tiendita'
        }
    ]);

    return (

        <div className='portafolio' id="projects">
            <div className='container'>
                <div className='row d-flex'>
                    <div className="col-12 mainHeader">
                        <div className='commonBorder'></div>
                        <h1>{header.mainHeader}</h1>
                        <div className='commonBorder'></div>
                    </div>

                    <div className="col-12 ">
                        <div className='common'>
                            <p className='mainContentPortafolio'>{header.mainContent}</p>
                        </div>
                    </div>


                    <div className="col-12">
                        <div className='container'>
                            <div className='row'>
                                {state.map(info => (
                                    <div className='colu-4'>
                                        <div className='portafolio__box'>
                                            <div className='containerImg'>
                                                <img src={info.imag} className='commonImgPort' alt={info.heading}/>
                                            </div>
                                            <div className='portafolio__box-header'>{info.heading}</div>
                                            <div className='portafolio__box-p'>{info.textService}</div>
                                            <div className='seeMore'>
                                                <a href={info.url} target='_blank' className='portafolio__box-url'>
                                                    Ir al Repositorio
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='row'>
                            {state2.map(info => (
                            <div className='colu-4'>
                                <div className='portafolio__box'>
                                    <div className='containerImg'>
                                        <img src={info.imag} className='commonImgPort' alt={info.heading} />
                                    </div>
                                    <div className='portafolio__box-header'>{info.heading}</div>
                                    <div className='portafolio__box-p'>{info.textService}</div>
                                    <div className='seeMore'>
                                        <a href={info.url} target='_blank' className='portafolio__box-url'>
                                            Ir al Repositorio
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                            
                            
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Portafolio;