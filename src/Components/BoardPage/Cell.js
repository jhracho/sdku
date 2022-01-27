import React, {Fragment} from "react";
import { NumFill } from "../../Services/NumFill.js";

const Cell = (id) =>{
    const num = id.char;
    if (num != '-'){
        return(
            <Fragment>
                <input id = {'c' + (id.id + 1)} placeholder={num} readOnly='readonly' className="cell prefill" type="text" value={num} onKeyUp={NumFill}/>
            </Fragment> 
        )
    }
    else{
        return(
            <Fragment>
                <input id = {'c' + (id.id + 1)} className="cell" type="text"  onKeyUp={NumFill} minLength="1" maxLength="1"/>
            </Fragment>
        )
    }
};

export default Cell;