import React from 'react';

// Grabs puzzle input for cross-referencing
export const checkAnswer = (event) => {
    // Setup
    event.preventDefault();
    var puzzle = "";

    // Get input data
    for (let i = 0; i < 81; i++){
        var input = event.target[i].value;
        if (input === ""){ 
            alert('One or more squares is empty!');
            return null;       
        }
        puzzle += event.target[i].value; 
    }

    // Compare puzzle to solution
    console.log(puzzle);
}