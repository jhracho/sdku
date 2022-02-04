import React, {FC} from 'react';
import { ChangeTheme } from '../../Services/ThemeService';

const Switch: FC = () =>{
    return(
        <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onClick={ChangeTheme}/>
                <div className="slider round"></div>
            </label>
            <em>Enable Dark Mode!</em>
        </div>
    );
};

export default Switch;