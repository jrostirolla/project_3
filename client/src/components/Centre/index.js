import React from "react";

const centreQuestion = () => {
    const tempAnswer = async (event) => {
        try {
            console.log('that worked!')
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div>
            <h1>What would you like your centrepiece to be?</h1>
                <form>
                    <label>Fish: </label>
                        <select>
                            <option value='Betta Fish'> Betta Fish </option>
                            <option value='Goldfish'> Goldfish </option>
                            <option value='Red Cherry Shrimp'> Red Cherry Shrimp </option>
                            <option value='Pea Puffer'> Pea Puffer </option>
                            <option value='Blue Ram'> Blue Ram </option>
                            <option value='Dwarf Gourami'> Dwarf Gourami </option>
                        </select>
                </form>
        </div>
    )
};

export default centreQuestion;