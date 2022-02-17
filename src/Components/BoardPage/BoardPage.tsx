import React, {FC, useEffect} from 'react';
import Puzzle from './Puzzle';
import Nav from '../Nav/Nav';
import Timer from './Timer';

import { GetTheme } from '../../Services/ThemeService';

interface BoardProps{
    time: number; 
}

const BoardPage: FC<BoardProps> = ({time}) =>{
    useEffect(() =>{
        GetTheme();
    }, []);

    return(
        <div id='board-page-container' className='blur'>
            <Nav />
            <Timer time={time}/>
            <Puzzle />
        </div>
    );
};

export default BoardPage;