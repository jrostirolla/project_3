import React from 'react';
import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { NEW_BUILD } from '../utils/mutations';

const New = () => {    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [addAnswers, { loading, data, err }] = useMutation(NEW_BUILD);

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

const comp = (question) => {
        if (question.type === 'option') {    
          return  <select>
            {
                question.options.map(el => <option value={el} key={el}> {el} </option>)
            }
            </select>

        } else if (question.type === 'text') {
            return <div>
            <input id='text-entry' type='text' placeholder={( question.placeholder )}></input>
            </div> 
        }
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addAnswers({
                variables: {
                    temp: '',
                    size: '',
                    planted: '',
                    centrepiece: '',
                    fishAdditions: ''
                }
            })
        } catch (err) {
            console.log(err)
        }

    };

    const styles = {
        main: {
            background: 'lightblue',
            margin: 0,
            padding: '10px',
            textAlign: 'center',
        }
    }

    return (
        <main>
        <div style={styles.main}>
            <div>
                <h1>Fishtank Builder</h1>
                <p><b>Struggling to find the proper build for your fishtank? You've come to the right place!</b></p>
                <p><b>Answer the prompts below to build your fishtank design!</b></p>
                        <div>
                            {
                                questions.map(question =>
                                    {
                                        return <div>
                                        <h2>{( question.question )}</h2>
                                            {comp(question)}
                                        </div>
                                    }
                                )
                            }
                        </div>
                    </div>
                    <button type='submit' value='submit' onClick={handleFormSubmit}> Submit </button>
            </div>
        </main>
    )
}

export default New;