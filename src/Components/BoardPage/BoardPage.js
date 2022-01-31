import React, {Fragment} from "react";
import Puzzle from "./Puzzle";
import Switch from "./Switch";
import Timer from "./Timer";

const BoardPage = () =>{
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