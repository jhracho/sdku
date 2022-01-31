import React from "react";
import Board from './Board';
import Submit from "./Submit";

import { checkAnswer } from "../../Services/AnswerService.js";

const Puzzle = () =>{
    return (
        <div id="board-container">
            <form onSubmit={checkAnswer} autoComplete="off">
                <Board />
                <Submit />
            </form>
        </div>
    );
}

export default Puzzle;