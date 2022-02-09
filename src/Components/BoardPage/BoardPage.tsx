import React, {FC, useEffect} from 'react';
import Puzzle from './Puzzle';
import Switch from './Switch';
import Nav from '../Nav/Nav';

import { GetTheme } from '../../Services/ThemeService';

const BoardPage: FC = () =>{
    useEffect(() =>{
        GetTheme();
    }, []);

    return(
        <div id='board-page-container' className='blur'>
            <Nav />
            <Switch />
            <Puzzle />
        </div>
    );
};

export default BoardPage;