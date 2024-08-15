import React, { Component } from 'react';
import Project from '../components/project/Project.jsx';
//-------------------------------------------------------------------------//
class Portfolio extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <Project />
            </>
        );
    }
}
//-------------------------------------------------------------------------//
export default Portfolio;