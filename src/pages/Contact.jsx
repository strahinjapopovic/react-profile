import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, } from '@fortawesome/free-solid-svg-icons';
//-------------------------------------------------------------------------//
const Contact = () => {
    const [error, setError] = useState();
    const [inputState, setInputState] = useState({ firstName: '', lastName: '', email: '', message: '', });

    const handleInputOnChange = async (event) => {
        const { name, value } = event.target;
        setInputState({ ...inputState, [name]: value, });
    }
    
    const handleInputOnSubmit = async (event) => {
        event.preventDefault();
        console.log(inputState);
        if(inputState.firstName == '' || inputState.lastName == '' || inputState.email == '' || inputState.message == '') {
            setError(`( * ) - Insert all required fields`);
        } else {
            setError(``);
            
        }
    }   
    const shevron = ` >>>`;
    return (
        <>
            <div id='master-contact'>
                <section id='contact-sec'>
                    <section id='contact-sec-sub'>
                        <div id='contact-inner'>
                            <p>
                                <span id='contactTitle'>Contact</span>
                                <span id='contactForm'> Form</span> <FontAwesomeIcon id='arrowIcon' icon={faAnglesRight} />
                            </p>
                            <form id='contact-form' onSubmit={handleInputOnSubmit}>
                                <table id="contact-tbl">
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="firstName">First Name <span id='error'>( * )</span></label></td>
                                            <td><label htmlFor="lastName">Last Name <span id='error'>( * )</span></label></td>
                                        </tr>
                                        <tr>
                                            <td><input placeholder="Insert first name" name="firstName" type="text" 
                                                value={inputState.firstName} onChange={handleInputOnChange} />
                                            </td>
                                            <td>
                                                <input placeholder="Insert last name" name="lastName" type="text" 
                                                value={inputState.lastName} onChange={handleInputOnChange} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <label htmlFor="email">Email <span id='error'>( * )</span></label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <input type="text" id="email" name="email" placeholder="Insert email" 
                                                value={inputState.email} onChange={handleInputOnChange} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}><label htmlFor="message">Message <span id='error'>( * )</span></label></td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <textarea type="text" id="message" name="message" placeholder="Insert message here ..." 
                                                value={inputState.message} onChange={handleInputOnChange}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <button type="submit" id="submit" name="submit">Send<span id="shevron">{shevron}</span></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                {error && (<div id="error-message">{error}</div>)}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </section>
                </section>
            </div>
        </>
    );
}
//-------------------------------------------------------------------------//
export default Contact;