import React, {FC, Fragment} from 'react';
import BoardPage from "./BoardPage/BoardPage";
import LandingPage from './LandingPage/LandingPage';
import LeaderboardPage from './RankingPage/LeaderboardPage';

import useTimer from '../Services/TimerService';

const Components: FC = () =>{
    const {timer, handleStart} = useTimer(0);

    return(
        <Fragment>
            <LandingPage handle={handleStart}/>
            <BoardPage time={timer}/>
            <LeaderboardPage />
        </Fragment>
    );
};

export default Components;