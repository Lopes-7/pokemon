/**
 * IMPORTS
 */
import React from 'react';
import {Link} from 'react-router-dom';


/**
 * CODE
 */

/**
 * I am a header component.
 */
function header () {
    return (
        <div>
            <ul>
                <li>
                    <button><Link to="/">Home</Link></button>
                </li>
                <li>
                    <button><Link to="/ask-me">Ask Slowking!</Link></button>
                </li>
                <li>
                    <button><Link to="/questions">Test your knowledge!</Link></button>
                </li>
                <li>
                    <button><Link to="/whos-that-pokemon">Who's that Pokémon?</Link></button>
                </li>
            </ul>
        </div>
    );
}


/**
 * EXPORTS
 */
export default header;
