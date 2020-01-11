/**
 * IMPORTS
 */
import React from 'react';
import {useEffect} from 'react';
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

    // update question and option when index is updated
    useEffect(() => {
        // clear selected option
        setSelectedOption('');

        // index is valid: update selected question
        if (index < questions.length) {
            setSelectedQuestion(questions[index]);
        }
        // reset index value
        else {
            setIndex(0);
        }
    },[index]);

    // I am a change question function
    function changeQuestion() {
        setIndex(index + 1);
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
