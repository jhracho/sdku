import React, {FC, Fragment} from 'react';
import { NumFill } from '../../Services/NumFill';


interface CellProps{
    id: number;
    char: string;
}

const Cell: FC<CellProps> = ({id, char}) =>{
    if (char !== '-'){
        return(
            <Fragment>
                <input id = {'c' + (id + 1)} placeholder={char} readOnly className="cell prefill" type="text" value={char}/>
            </Fragment>
        );
    }
    else{
        return(
            <Fragment>
                <input id = {'c' + (id + 1)} onKeyUp={NumFill} className="cell" type="text" maxLength={1}/>
            </Fragment>
        );
    }
};

export default Cell;