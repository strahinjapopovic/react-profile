import { Link } from 'react-router-dom';
import React, { Component } from 'react';
//-------------------------------------------------------------------------//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFolder, faFolderOpen, faEnvelope, faIdCardClip } from '@fortawesome/free-solid-svg-icons';
//-------------------------------------------------------------------------//
class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section id='navigation-panel'>
                <section id='linkbar-main'>
                    <div><Link to={'/'}><FontAwesomeIcon id='solidIcon' icon={faHouse} /> About</Link></div>
                    <div><Link to={'/portfolio'}><FontAwesomeIcon id='solidIcon' icon={faFolderOpen} />  Portfolio</Link></div>
                    <div><Link to={'/contact'}><FontAwesomeIcon id='solidIcon' icon={faEnvelope} /> Contact</Link></div>
                    <div><Link to={'/resume'}><FontAwesomeIcon id='solidIcon' icon={faIdCardClip} /> Resume</Link></div>
                </section>
            </section>
        );
    }
}
//-------------------------------------------------------------------------//
export default Navbar;