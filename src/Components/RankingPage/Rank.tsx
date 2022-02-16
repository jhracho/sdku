import React, {FC} from 'react';

interface RankProps{
    name: string;
    time: string;
}

const Rank: FC<RankProps> = ({name, time}) =>{
    return(
        <h4>{name} -- {time}</h4>
    );
};

export default Rank;