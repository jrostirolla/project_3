import React from 'react';
import { useQuery } from '@apollo/client';

import AdditionalFish from '../components/Additional';
import Centre from  '../components/Centre';
import Planted from '../components/Planted';
import Size from '../components/Size';
import Temperature from '../components/Temperature';

const New = () => {
    const newBuild = {
        //TODO: Build async function that waits for each section of builder to be filled,
        //THEN sends said data to DB to be stored under user
    }

    return (
        <main>
            <div>
                <h1>Fishtank Builder</h1>
                <p>Struggling to find the proper build for your fishtank? You've come to the right place!</p>
                <div>
                    //TODO: build out function that adds a new component after every question
                </div>
            </div>
        </main>
    )
}

export default New;