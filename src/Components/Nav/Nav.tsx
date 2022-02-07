import React, {FC} from 'react';
import Menu from './Menu';

const Nav: FC = () =>{
    return(
        <div className='navbar'>
            <div className='nav-container'>
                <div className='title'>
                    <h1>SDKU</h1>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default Nav;