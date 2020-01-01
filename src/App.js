/**
 * IMPORTS
 */
import React from 'react'
import {Route} from 'react-router-dom';
import Ask from './components/pages/ask.js';
import Header from './components/header.js'; 
import Home from './components/pages/home.js'; 
import Profile from './components/pages/profile.js'; 
import Questions from './components/pages/questions.js';


/**
 * CODE
 */

/**
 * I am the app component.
 */
function app () {
        return (
            <div>
                <Header/>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/ask-me" component={Ask}/>
                    <Route path="/questions" component={Questions}/>
                    <Route path="/whos-that-pokemon" component={Profile}/>
                </div>
            </div>
        );
}


/**
 * EXPORTS
 */
export default app;
