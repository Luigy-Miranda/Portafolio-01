import React from 'react';

import Python from '../../public/images/python1.png';
import C from '../../public/images/c.png';
import Java from '../../public/images/java.png';
import Html from '../../public/images/html1.png';
import Css from '../../public/images/css.png';
import Bootstrap from '../../public/images/Bootstrap.png';
import Sql from '../../public/images/sql.png';
import Php from '../../public/images/php.png';
import Fox from '../../public/images/fox.png';
import Visual from '../../public/images/visual.png';

const Skill = () => {



    return (
        <div className='skill' id="skill">
            <div className='container'>
                <div className='row d-flex'>
                    <div className="col-12 mainHeaderSkill">
                        <div className='commonBorder'></div>
                        <h1>Habilidades</h1>
                        <div className='commonBorder'></div>
                    </div>
                    <div className="col-12 ">
                        <div className='skillBanner'>
                            <img src={Python} alt=""/>
                            <img src={C} alt=""/>
                            <img src={Java} alt=""/>
                            <img src={Html} alt=""/>
                            <img src={Css} alt=""/>
                            <img src={Bootstrap} alt=""/>
                            <img src={Sql} alt=""/>
                            <img src={Php} alt=""/>
                            <img src={Fox} alt=""/>
                            <img src={Visual} alt=""/>
                        </div>
                    </div>
                </div>

                {/* <div className='portafolio__header'>
                    <div className='common'>
                        <h3 className='heading'>My Skills</h3>
                        <div className='commonBorder'></div>
                    </div>

                    <div className='skillBanner'>
                        <img src={Python} />
                        <img src={C} />
                        <img src={Js} />
                        <img src={Html} />
                        <img src={Css} />
                        <img src={Bootstrap} />
                        <img src={MySQL} />
                        <img src={Flask} />
                        <img src={ReactJS} />
                        <img src={API} />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Skill