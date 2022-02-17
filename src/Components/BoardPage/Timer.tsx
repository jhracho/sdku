import React, {FC} from 'react';

interface TimerProps{
    //time: Dispatch<SetStateAction<any>>;
    time: number;
}

const Timer: FC<TimerProps> = ({time}) =>{
    const formatTime = () =>{
        const getSeconds = `0${(time % 60)}`.slice(-2)
        const minutes = `${Math.floor(time / 60)}`
        const getMinutes = `0${(Math.floor(time / 60)) % 60}`.slice(-2)
        return `${getMinutes} : ${getSeconds}`
    }

    return(
        <div className='timer-container'>
            <h1 id='timer-text'>{formatTime()}</h1>
        </div>
    )
};

export default Timer;