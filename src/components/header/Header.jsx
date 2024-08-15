import Navbar from '../navbar/Navbar';
//-------------------------------------------------------------------------//
import React, { Component } from 'react';
//-------------------------------------------------------------------------//
class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section id='header-main'>
                <div id='title-main'>
                    <p>Strahinja <span>Popovic</span></p>
                </div>
                <div id='navbar-main'>
                    <Navbar />
                </div>
            </section>
        );
    }
}
//-------------------------------------------------------------------------//
export default Header;