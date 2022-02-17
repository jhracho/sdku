import React, {useState, useRef} from 'react';

const useTimer = (initialState = 0) =>{
    const [timer, setTimer] = useState(0)
    const increment = useRef(null)

    const handleStart = () =>{
        window.setInterval(() =>{
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    return {timer, handleStart}
}

export default useTimer;