import React, {FC} from 'react';
import Switch from './Switch';
import RankButton from './RankButton';

const Nav: FC = () =>{
    return(
        <div className='navbar'>
            <div className='nav-container'>
                <Switch />
                <div className='title'>
                    <h1>SDKU</h1>
                </div>
                <RankButton />
            </div>
        </div>
    );
};

export default Nav;