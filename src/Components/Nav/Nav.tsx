import React, {FC} from 'react';
import Switch from './Switch';

const Nav: FC = () =>{
    return(
        <div className='navbar'>
            <div className='nav-container'>
                <Switch />
                <div className='title'>
                    <h1>SDKU</h1>
                </div>
            </div>
        </div>
    );
};

export default Nav;