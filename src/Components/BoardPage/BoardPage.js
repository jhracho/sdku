import React, {Fragment, useEffect} from "react";
import Puzzle from "./Puzzle";
import Switch from "./Switch";
import Timer from "./Timer";
import {GetTheme} from "../../Services/ThemeService.js";

const BoardPage = () =>{
    useEffect(() =>{
        GetTheme();
    }, []);

    return (
        <div>
            <Switch />
            <Timer />
            <Puzzle />
            <script src="../Services/ThemeService.js"></script>
        </div>
    );
}

export default BoardPage;