import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, } from '@fortawesome/free-solid-svg-icons';
import { faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
//-------------------------------------------------------------------------//
import about from '../assets/images/personal.png';
import mongodbIcon from '../assets/images/mongodb-icon.png';
import expressjsIcon from '../assets/images/expressjs-icon.png';
//-------------------------------------------------------------------------//
class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div id='master'>
                    <section id='about-desc-main'>
                        <section id='img-and-desc'>
                            <div id='personal-img'>
                                <img src={about} />
                            </div>
                            <div id='short-desc'>
                                <FontAwesomeIcon id='arrowIcon' icon={faAnglesRight} />
                                <p>
                                    <span id='mern'>MERN</span><span id='stack'>-Stack</span><br />
                                    ( MongoDB, Express.js, React, Node.js ) + <br />
                                    PostgreSQL, Apollo Server, GraphQL, Vite, PWA, ...
                                </p>
                                <p id='brandsIcons'>
                                    <img src={mongodbIcon} />
                                    <img src={expressjsIcon} />
                                    <FontAwesomeIcon id='brands-icons' icon={faReact} />
                                    <FontAwesomeIcon id='brands-icons' icon={faNodeJs} />
                                </p>
                            </div>
                        </section>
                        <section id='description'>
                            <div id='long-desc'>
                                <p>After completion of university degree in IT at University of Canberra, 
                                    I have started to further develop skills in Linux, PHP and JavaScript. 
                                    Currently, the most of my time spending in JS web development. 
                                    Looking forward to any new JS or MERN Stack challenge that can come across. 
                                </p>
                            </div>
                        </section>
                    </section>
                </div>
                <div id='master'>
                </div>
            </>
        );
    }
}
//-------------------------------------------------------------------------//
export default About;