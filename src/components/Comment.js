import React from 'react';


import Fotox from '../../public/images/fotox.jpg';
import Fotox2 from '../../public/images/foto2x.jpg';
import Fotox3 from '../../public/images/foto3x.jpg';
const Comment = () => {
    const [header] = React.useState({
        mainHeader: 'Comentarios'
    });

    const [state] = React.useState([
        {
            id: 1,
            icon: <img className='imgAbout2' src={Fotox3} alt={header.mainContent} />,
            heading: 'Humberto Santa Rosa',
            textService: 'Excelente Servicios chicos. 10/10'
        },
        {
            id: 2,
            icon: <img className='imgAbout2' src={Fotox2} alt={header.mainContent} />,
            heading: 'Debbie Engracia Tagle',
            textService: '100% Recomendados'
        },
        {
            id: 3,
            icon: <img className='imgAbout2' src={Fotox} alt={header.mainContent} />,
            heading: 'Katiusca Sandoval Ruiz',
            textService: 'Buen soporte y calidad en sus servicios.'
        }
    ]);

    return (


        <div className='comentarios' id="Comment">
            <div className='container'>
                <div className='row d-flex'>

                    <div className="col-12 mainContentComentarios">
                        <div className='commonBorder'></div>
                        <h1>{header.mainHeader}</h1>
                        <div className='commonBorder'></div>
                    </div>


                    <div className="col-12 centerContent">
                        <div className='common'>
                            <p className='mainContentComentarios'>{header.mainContent}</p>
                        </div>
                    </div>


                    <div className="col-12">
                        <div className='container'>
                            <div className='row'>

                            {state.map(info => (
                                    <div className='colu-4'>
                                        <div className='comentarios_box'>

                                            <div>{info.icon}</div>
                                            <div className='comentarios_box-header'>{info.heading}</div>
                                            <div className='comentarios_box-p'>{info.textService}</div>
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

export default Comment;