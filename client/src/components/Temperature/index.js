import React, { useState } from 'react';

const tempQuestion = () => {
    const tempAnswer = async (event) => {
        try {
            console.log('that worked!')
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div>
            <h1>What water temperature were you looking for?</h1>
            <button type="button" onClick={() => tempAnswer}>Warm</button>
            <button type='button' onClick={() => tempAnswer}>Cold</button>
        </div>
    )
};

export default tempQuestion;