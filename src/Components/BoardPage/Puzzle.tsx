import React, {FC} from 'react';
import Board from './Board';
import Submit from './Submit';

import { checkAnswer } from '../../Services/AnswerService';

const Puzzle: FC = () =>{
    return(
        <div id='board-container'>
            <form onSubmit={checkAnswer} autoComplete='off'>
                <Board />
                <Submit />
            </form>
        </div>
    );
};

export default Puzzle;