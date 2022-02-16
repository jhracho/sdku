import React, {FC, useEffect} from 'react';
import Puzzle from './Puzzle';
import Nav from '../Nav/Nav';
import Timer from './Timer';

import { GetTheme } from '../../Services/ThemeService';

const BoardPage: FC = () =>{
    useEffect(() =>{
        GetTheme();
    }, []);

    return(
        <div id='board-page-container' className='blur'>
            <Nav />
            <Timer />
            <Puzzle />
        </div>
    );
};

export default BoardPage;