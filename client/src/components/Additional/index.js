import { mergeOptions } from "@apollo/client";
import React from "react";

const styles = {
    
}

const additionQuestion = () => {
    return(
        <div>
        <h1>What would you like your centrepiece to be?</h1>
            <form>
                <label>Fish: </label>
                    <select>
                        <option value='Barbs'> Barbs </option>
                        <option value='Danios'> Danios </option>
                        <option value='Catfish'> Catfish </option>
                        <option value='Tetras'> Tetras </option>
                        <option value='Guppies'> Guppies </option>
                        <option value='Platys'> Platys </option>
                        <option value='White Clouds'> White Clouds </option>
                        <option value='Rasboras'> Rasboras </option>
                        <option value='Corydoras'> Corydoras </option>
                        <option value='Hatchet Fish'> Hatchet Fish </option>
                        <option value='Snail'> Snail </option>
                    </select>
            </form>
    </div>
    )
};

export default additionQuestion;