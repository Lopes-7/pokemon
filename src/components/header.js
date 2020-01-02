/**
 * IMPORTS
 */
import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.css';

/**
 * CODE
 */

/**
 * I am a header component.
 */
function header () {
    return (
        <div className="header">
                <div className="header-item">
                    <Link className="header-link" to="/">Home</Link>
                </div>
                <div className="header-item">
                    <Link className="header-link" to="/ask-me">Ask Slowking!</Link>
                </div>
                <div className="header-item">
                    <Link className="header-link" to="/questions">Test your knowledge!</Link>
                </div>
                <div className="header-item">
                    <Link className="header-link" to="/whos-that-pokemon">Who's that Pokémon?</Link>
                </div>
        </div>
    );
}


/**
 * EXPORTS
 */
export default header;
