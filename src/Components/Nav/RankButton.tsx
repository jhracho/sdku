import React, {FC} from 'react';
import { RankPopup } from '../../Services/RankService';

const RankButton: FC = () =>{
    return(
        <div className='rank-button-container'>
            <button onClick={RankPopup}><img src='../../Assets/competition.png' alt='Rankings' /></button>
        </div>
    );
};

export default RankButton;