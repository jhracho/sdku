import React, {FC} from 'react';
import { StartSession } from '../../Services/StartSession';

const LandingPage: FC = () =>{
    return(
        <div className ='landing-page-container' id ='landing-page-container'>
            <div className='text'>
                <h2>Welcome to</h2>
                <h1>SDKU</h1>
                <h2>Finish the puzzle as</h2>
                <h2>fast as possible.</h2>
            </div>
            <div className='button'>
                <button onClick={StartSession}>Start</button>
            </div>
        </div>  
    );
};

export default LandingPage;