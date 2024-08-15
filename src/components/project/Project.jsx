import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//-------------------------------------------------------------------------//
import jatePwaImg from '../../assets/projectImg/jate-pwa-github.png';
import mongoApiGitHubImg from '../../assets/projectImg/mongo-api-github.png';
import regexIntroGitHubImg from '../../assets/projectImg/regex-intro-github.png';
import ecomRouterGitHubImg from '../../assets/projectImg/ecom-router-github.png';
import weatherDashGitHubImg from '../../assets/projectImg/weather-api-github.png';
import empDataAppGitHubImg from '../../assets/projectImg/emp-data-app-github.png';
import nodeGenSvgGitHubImg from '../../assets/projectImg/node-gen-svg-github.png';
import jsWirardGitHubImg from '../../assets/projectImg/js-wizard-repo-github.png';
import nodeGenReadmeGitHubImg from '../../assets/projectImg/node-gen-readme-github.png';
//-------------------------------------------------------------------------//
const regexIntroURL = `https://github.com/strahinjapopovic/regex-intro`;
const weatherApiURL = `https://github.com/strahinjapopovic/weather-api`;
const jatePwaGitHubURL = `https://github.com/strahinjapopovic/jate-pwa`;
const bookApiGitHubURL = `https://github.com/strahinjapopovic/book-api`;
const empDataAppURL = `https://github.com/strahinjapopovic/emp-data-app`;
const jsWizardGitHubURL = `https://github.com/strahinjapopovic/js-wizard`;
const mongoApiGitHubURL = `https://github.com/strahinjapopovic/mongo-api`;
const ecomRouterGitHubURL = `https://github.com/strahinjapopovic/ecom-router`;
const nodeGenSvgGitHubURL = `https://github.com/strahinjapopovic/node-gen-svg`;
const nodeGenReadmeGitHubURL = `https://github.com/strahinjapopovic/node-gen-readme`;
//-------------------------------------------------------------------------//
class Project extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id='project-main'>
                <div id='section-handler'>
                    <section id='project-main-sub'>
                        <div id='project-link-img'>
                        <div id='description-paragraphs'>
                                <p>
                                    JS Wizard Repository ( GitHub: <span><Link to={jsWizardGitHubURL}>js-wizard</Link></span> )
                                </p>
                                <p>
                                    🚀Server-Client application with Vite.js configuration architecture deploying apolo-server with GraphQL server-client API.
                                </p>
                                <p>
                                    <Link id='projectLink-paragraph' to='https://js-wizard.onrender.com/'>js-wizard.onrender.com/</Link>
                                </p>
                            </div>
                            <Link id='projectLink' to={jsWizardGitHubURL}>
                                <img id='projectImg' src={jsWirardGitHubImg} />
                            </Link>
                        </div>
                    </section>
                    <section id='project-main-sub'>
                        <div id='project-link-img'>
                            <div id='description-paragraphs'>
                                <p>
                                    JATE - Just Another Text Editor ( GitHub: <span><Link to={jatePwaGitHubURL}>jate-pwa</Link></span> )
                                </p>
                                <p>
                                    🌐Just Another Text Editor with Progressive Web Application functionality demonstrate performance, 
                                    resource usability and content presentation architecture.
                                </p>
                                <p>
                                    <Link id='projectLink-paragraph' to='https://jate-pwa-97dd.onrender.com/'>jate-pwa-97dd.onrender.com/</Link>
                                </p>
                            </div>
                            <Link id='projectLink' to={jatePwaGitHubURL}>
                                <img id='projectImg' src={jatePwaImg} />
                            </Link>
                        </div>
                    </section>
                </div>
                <div id='section-handler'>
                    <section id='project-main-sub'>
                        <div id='project-link-img'>
                            <div id='description-paragraphs'>
                                <p>
                                    MongoDB Server-Side APIs ( GitHub: <span><Link to={mongoApiGitHubURL}>mongo-api</Link></span> )
                                </p>
                                <p>
                                    📚Testing server-side routes with MongoDB collection by using Insomnia API Development Platform.
                                </p>
                                <p>
                                    <Link id='projectLink-paragraph' to='https://youtu.be/lEoGeMcE5zM'>youtu.be/lEoGeMcE5zM</Link>
                                </p>
                            </div>
                            <Link id='projectLink' to={mongoApiGitHubURL}><img id='projectImg' src={mongoApiGitHubImg} /></Link>
                        </div>
                    </section>
                    <section id='project-main-sub'>
                        <div id='project-link-img'>
                            <div id='description-paragraphs'>
                                <p>
                                    PostgreSQL Server-Side APIs ( GitHub: <span><Link to={ecomRouterGitHubURL}>ecom-router</Link></span> )
                                </p>
                                <p>
                                    🌏Testing server-side routes with PostgreSQL relational database by using Insomnia API Development Platform.
                                </p>
                                <p>
                                    <Link id='projectLink-paragraph' to='https://youtu.be/K3DA7IOKb3Y'>youtu.be/K3DA7IOKb3Y</Link>
                                </p>
                            </div>
                            <Link id='projectLink' to={ecomRouterGitHubURL}><img id='projectImg' src={ecomRouterGitHubImg} /></Link>
                        </div>
                    </section>
                </div>
                <div id='section-handler'>
                    <section id='project-main-sub'>
                        <div id='project-link-img'>
                            <div id='description-paragraphs'>
                                <p>
                                    Employee Data App ( GitHub: <span><Link to={empDataAppURL}>emp-data-app</Link></span> )
                                </p>
                                <p>
                                    🌐Employee data application perfoms CRUD operations on PostgreSQL relational database 
                                    related with employee data stored by using inquirer.
                                </p>
                                <p>
                                    <Link id='projectLink-paragraph' to='https://youtu.be/BEtY4kz-DL0'>youtu.be/BEtY4kz-DL0</Link>
                                </p>
                            </div>
                            <Link id='projectLink' to={empDataAppURL}><img id='projectImg' src={empDataAppGitHubImg} /></Link>
                        </div>
                    </section>
                    <section id='project-main-sub'>
                        <div id='project-link-img'>
                            <div id='description-paragraphs'>
                                <p>
                                    Regex Introduction ( GitHub: <span><Link to={regexIntroURL}>regex-intro</Link></span> )
                                </p>
                                <p>
                                    📚Regex Introduction from basics and fundamentals to complex character 
                                    sequence expressions and URL params handling.
                                </p>
                                <p>
                                    <Link id='projectLink-paragraph' to='https://strahinjapopovic.github.io/regex-intro/'>
                                    strahinjapopovic.github.io/regex-intro/</Link> -:|:- <Link id='projectLink-paragraph' to='https://strahinjapopovic.github.io/regex-intro/app/'>
                                    strahinjapopovic.github.io/regex-intro/app/</Link>
                                </p>
                            </div>
                            <Link id='projectLink' to={regexIntroURL}><img id='projectImg' src={regexIntroGitHubImg} /></Link>
                        </div>
                    </section>
                </div>
                <div id='section-handler'>
                    <section id='project-main-sub'>
                        <div id='project-link-img'>
                        <div id='description-paragraphs'>
                                <p>
                                    Node.JS Generator README.md ( GitHub: <span><Link to={nodeGenReadmeGitHubURL}>node-gen-readme</Link></span> )
                                </p>
                                <p>
                                    ✨Node README.md Generator uses Inquirer npm package to serve terminal line by line Q&A and I/O processing 
                                    to obtain data and render info into desired file.
                                </p>
                                <p>
                                    <Link id='projectLink-paragraph' to='https://youtu.be/y8kfGvOxd2I'>youtu.be/y8kfGvOxd2I</Link>
                                </p>
                            </div>
                            <Link id='projectLink' to={nodeGenReadmeGitHubURL}>
                                <img id='projectImg' src={nodeGenReadmeGitHubImg} />
                            </Link>
                        </div>
                    </section>
                    <section id='project-main-sub'>
                        <div id='project-link-img'>
                            <div id='description-paragraphs'>
                                <p>
                                Node.JS Generator .SVG ( GitHub: <span><Link to={nodeGenSvgGitHubURL}>node-gen-svg</Link></span> )
                                </p>
                                <p>
                                    ✨Node SVG Generetor uses Inquirer npm package to serve terminal line by line Q&A and I/O processing 
                                    to obtain data about color and shapes to render.
                                </p>
                                <p>
                                    <Link id='projectLink-paragraph' to='https://youtu.be/MgZjCTYgpu4'>youtu.be/MgZjCTYgpu4</Link>
                                </p>
                            </div>
                            <Link id='projectLink' to={nodeGenSvgGitHubURL}>
                                <img id='projectImg' src={nodeGenSvgGitHubImg} />
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
//-------------------------------------------------------------------------//
export default Project;