import React from "react";
import Puzzle from "./Puzzle";
import NavBar from "./NavBar";
import Timer from "./Timer";

const BoardPage = () =>{
    return (
        <div>
            <NavBar />
            <Timer />
            <Puzzle />
        </div>
    );
}

export default BoardPage;