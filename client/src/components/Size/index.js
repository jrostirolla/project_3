import React from 'react';

const sizeQuestion = () => {
    const tempAnswer = async (event) => {
        try {
            console.log('that worked!')
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div>
            <h1>What size Tank are you looking for?</h1>
            <button type="button" onClick={() => tempAnswer}>Small (5 - 20 L)</button>
            <button type='button' onClick={() => tempAnswer}>Medium (20 - 100 L)</button>
            <button type='button' onClick={() => tempAnswer}>Large (100+ L)</button>
        </div>
    )

};

export default sizeQuestion;