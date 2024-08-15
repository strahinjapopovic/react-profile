import React, { Component } from 'react';
import { useRouteError } from 'react-router-dom';
//-------------------------------------------------------------------------//
class ErrorRouter extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const error = useRouteError();
        console.log(error);
        return(
            <div id='error-page'>
                <h1>Error Router Page</h1>
                <p>Unexpected router error loading page.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        );
    }
}
//-------------------------------------------------------------------------//
export default ErrorRouter;