import React, {FC} from 'react';
import Leaderboard from './Leaderboard';
import YourRanking from './YourRanking';
import { RankHide } from '../../Services/RankService';

const RankingPage: FC = () =>{
    return(
        <div id='leaderboard-container'>
            <button onClick={RankHide}>&#10005;</button>
            <h1>Rankings!</h1>
            <Leaderboard />
            <YourRanking />
        </div>
    );  
};

export default RankingPage;