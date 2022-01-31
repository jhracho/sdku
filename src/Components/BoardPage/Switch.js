import React from "react";
import {ChangeTheme} from "../../Services/ThemeService.js";

const Switch = () =>{
    return(
        <div class="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onClick={ChangeTheme}/>
                <div className="slider round"></div>
            </label>
            <em>Enable Dark Mode!</em>
        </div>
    );
}

export default Switch;