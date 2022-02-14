import React, {FC, Fragment} from 'react';
import BoardPage from "./BoardPage/BoardPage";
import LandingPage from './LandingPage/LandingPage';
import RankingPage from './RankingPage/RankingPage';

const Components: FC = () =>{
    return(
        <Fragment>
            <LandingPage />
            <BoardPage />
            <RankingPage />
        </Fragment>
    );
};

export default Components;