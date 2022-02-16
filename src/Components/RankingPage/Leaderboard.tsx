import React, {FC} from 'react';
import Rank from './Rank';

const Leaderboard: FC = () =>{
    const ranks = [
        ['user1', '00:01'],
        ['user2', '00:02'],
        ['user3', '00:03'],
        ['user4', '00:04'],
        ['user5', '00:05'],
        ['user6', '00:06'],
        ['user7', '00:07'],
        ['user8', '00:08'],
        ['user9', '00:09'],
        ['user10', '00:10']
    ];

    return(
        <div className = 'leaderboard'>
            {
                ranks.map((list, index) =>
                    <Rank key={index} name={list[0]} time={list[1]} />
                )
            } 
        </div>
    );  
};

export default Leaderboard;