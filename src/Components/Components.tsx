import React, {FC, Fragment} from 'react';
import BoardPage from "./BoardPage/BoardPage";
import LandingPage from './LandingPage/LandingPage';

const Components: FC = () =>{
    return(
        <Fragment>
            <LandingPage />
            <BoardPage />
        </Fragment>
    );
};

export default Components;