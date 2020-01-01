/**
 * IMPORTS
 */
import React from 'react';
import {useState} from 'react';
import Question from './question';
import questions from '../data/questions.json';


/**
 * CODE
 */

/**
 * I am a display component.
 */
function display () {
    // questions index state
    const [index, setIndex] = useState(0);

    // selected question state
    const [selectedQuestion, setSelectedQuestion] = useState(questions[index]);
    
    // selected option state
    const [selectedOption, setSelectedOption] = useState('');

    // I am a change question function
    async function changeQuestion() {
        console.log(index);
        console.log(questions.length);
        setIndex(index + 1);
        setSelectedQuestion(questions[index]);
        setSelectedOption('');
        console.log(index);
    }

    // I am a confirm answer function
    function confirm() {
        if (selectedQuestion.answer === selectedOption) {
            console.log('certa resposta');
            return;
        }
        console.log('resposta errada!');
    }
    
    // render
    return (
        <div>
            <Question question={selectedQuestion} />
            <ul>
            {selectedQuestion.options.map(o => {
                return (<li
                        key={o}
                        onClick={(e) => {
                            setSelectedOption(e.target.textContent);
                        }}>{o}</li>);
             })}
            </ul>
            <button onClick={changeQuestion}>Next question</button>
            <p>Answer: {selectedOption}</p>
            <button onClick={confirm}>Confirm</button>
        </div>
    );
}


/**
 * EXPORTS
 */
export default display;
