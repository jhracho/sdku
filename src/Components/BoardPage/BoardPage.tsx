import React, {FC} from 'react';
import Puzzle from './Puzzle';
import Switch from './Switch';
import Nav from '../Nav/Nav';

const BoardPage: FC = () =>{
    return(
        <div>
            <Nav />
            <Switch />
            <Puzzle />
        </div>
    );
};

export default BoardPage;