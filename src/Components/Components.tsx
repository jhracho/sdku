import React, {FC, Fragment} from 'react';
import BoardPage from "./BoardPage/BoardPage";
import LandingPage from './LandingPage/LandingPage';
import LeaderboardPage from './RankingPage/LeaderboardPage';

const Components: FC = () =>{
    return(
        <Fragment>
            <LandingPage />
            <BoardPage />
            <LeaderboardPage />
        </Fragment>
    );
};

export default Components;