import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//-------------------------------------------------------------------------//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow, faYoutube, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
//-------------------------------------------------------------------------//
const TwitterXAccURL = `https://twitter.com/stanpopovic`;
const GitHubAccURL = `https://github.com/strahinjapopovic`;
const YouTubeAccURL = `https://www.youtube.com/@strahinja-popovic-ch`;
const FacebookAccURL = `https://www.facebook.com/strahinja.popovic.37`;
const LinkedInAccURL = `https://www.linkedin.com/in/strahinja-popovic-b76902117/`;
const StackOverflowAccURL = `https://stackoverflow.com/users/26687796/strahinja-popovic`;
//-------------------------------------------------------------------------//
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return (
            <section id='footer'>
                <div id='sub-footer'>
                    <p>
                        <Link id='footer-icon' to={GitHubAccURL}>
                            <FontAwesomeIcon icon={faGithub} />
                        </Link>
                        <Link id='footer-icon' to={LinkedInAccURL}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                        <Link id='footer-icon' to={StackOverflowAccURL}>
                            <FontAwesomeIcon icon={faStackOverflow} />
                        </Link>
                        <Link id='footer-icon' to={FacebookAccURL}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                        <Link id='footer-icon' to={YouTubeAccURL}>
                            <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                        <Link id='footer-icon' to={TwitterXAccURL}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                    </p>
                    <p>
                        <span id='footer-logo'>JS</span> Full-Stack Development
                    </p>
                    <p>
                        Copyright&copy; {this.state.date.getFullYear() + ` codexdev. All rights reserved.`}
                    </p>
                </div>
            </section>
        );
    }
}
//-------------------------------------------------------------------------//
export default Footer;