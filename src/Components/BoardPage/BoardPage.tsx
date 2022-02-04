import React, {FC} from 'react';
import Puzzle from './Puzzle';
import Switch from './Switch';

const BoardPage: FC = () =>{
    return(
        <div>
            <Switch />
            <Puzzle />
        </div>
    );
};

export default BoardPage;