import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, } from '@fortawesome/free-solid-svg-icons';
//-------------------------------------------------------------------------//
class Resume extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
            <div id='master-contact'>
                <section id='contact-sec'>
                    <section id='contact-sec-sub'>
                        <div id='contact-inner'>
                            <p>
                                <span id='contactTitle'>Resume</span>
                                <span id='contactForm'> Info</span> <FontAwesomeIcon id='arrowIcon' icon={faAnglesRight} />
                            </p>
                            <p><strong>Client - Front ( UI )</strong></p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                            </ul>
                            <p><strong>Server - Backend</strong></p>
                            <ul>
                                <li>APIs</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Apollo Server</li>
                                <li>GraphQL</li>
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                    </section>
                </section>
            </div>
        </>
        );
    }
}
//-------------------------------------------------------------------------//
export default Resume;