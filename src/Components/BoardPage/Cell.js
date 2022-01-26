import React, {Fragment} from "react";
import { NumFill } from "../../Services/NumFill.js";

const Cell = (id, char) =>{
    var i = 'c' + (id.id + 1);
    return(
        <Fragment>
            <input id = {i}  className="cell" type="text"  onKeyUp={NumFill} minLength="1" maxLength="1"/>
        </Fragment>
    )
};

export default Cell;