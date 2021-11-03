import React from 'react';
import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

const New = () => {    
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
            id: 1,
            type: 'text',
            label: 'Temperature',
            question: 'Would you like warm or cold water?',
            placeholder: 'warm / cold',
        },
        { 
            id: 2,
            type: 'text',
            label: 'Size',
            question:'Would you like a small (5 - 20 L), medium (20 - 100 L) or large (100+ L) tank?',
            placeholder: 'small / medium / large',
        },
        {
            id: 3,
            type: 'text',
            label: 'Planted',
            question: 'Would you like plants in your tank?',
            placeholder: 'yes / no',
        },
        {
            id: 4,
            type: 'option',
            label: 'Fish:',
            question: 'What would you like your centrepiece fish to be?',
            options: ['Betta Fish', 'Goldfish', 'Red Cherry Shrimp', 'Pea Puffer', 'Blue Ram', 'Dwarf Gourami'],
        },
        {
            id: 5,
            type: 'option',
            label: 'Fish:',
            question: 'What would you like your other fish to be?',
            options: ['Barbs', 'Danios', 'Catfish', 'Tetras', 'Guppies', 'Platys', 'White Clouds', 'Rasboras', 'Corydoras', 'Hatchet Fish', 'Snail'],
        }
    ];

    let state = [
        {
            id: 1,
            answer: ''
        },
        {
            id: 2,
            answer: ''
        },
        {
            id: 3,
            answer: ''
        },
        {
            id: 4,
            answer: ''
        },
        {
            id: 5,
            answer: ''
        }
    ]

const comp = (type) => {
        if (questions[currentQuestion].type === 'options') {    
    const cpMap = questions.options.map(buildQuestion);
    
    function buildQuestion(fish) {
       return <option value={fish}> {fish} </option>
    }

        return <div>
            <h2>{( questions[currentQuestion].question )}</h2>
            <form>
                <label>{( questions[currentQuestion].label )}</label>
                    <select>
                        {cpMap}
                    </select>
            </form>
            </div>
        } else if (type === 'text') {
            return <div>
            <h2>{( currentQuestion.question )}</h2>
            <input id='text-entry' type='text' placeholder={( currentQuestion.placeholder )}></input>
            </div> 
        }
    }

    function handleChangingQuestion() {
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
        } else {
            console.log('end of quiz, display answers needed');
        }

    };

    return (
        <main>
            <div>
                <h1>Fishtank Builder</h1>
                <p><b>Struggling to find the proper build for your fishtank? You've come to the right place!</b></p>
                <p><b>Answer the prompts below to build your fishtank design!</b></p>
                <div>
                    {questions[currentQuestion].question}
                    {comp(questions[currentQuestion].type)}
                    <button type='submit' value='submit' onClick={handleChangingQuestion}> Next </button>
                </div>
            </div>
        </main>
    )
}

export default New;