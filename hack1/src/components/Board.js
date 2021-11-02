/****************************************************************************
  FileName      [ Board.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu, Chin-Yi Cheng ]
  Synopsis      [ This file generates the Board. ]
  Copyright     [ 2021 10 ]
****************************************************************************/

import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import Modal from './Modal';
import Dashboard from './Dashboard';
import createBoard from '../util/createBoard';
import { revealed } from '../util/reveal';
import './css/Board.css'


const Board = ({ boardSize, mineNum, backToHome }) => {
    const [board, setBoard] = useState([]);                     // An 2-dimentional array. It is used to store the board.
    const [nonMineCount, setNonMineCount] = useState(0);        // An integer variable to store the number of cells whose value are not '💣'.
    const [mineLocations, setMineLocations] = useState([]);     // An array to store all the coordinate of '💣'.
    const [gameOver, setGameOver] = useState(false);            // A boolean variable. If true, means you lose the game (Game over).
    const [remainFlagNum, setRemainFlagNum] = useState(0);      // An integer variable to store the number of remain flags.
    const [win, setWin] = useState(false);                      // A boolean variable. If true, means that you win the game.

    useEffect(() => {
        // Calling the function
        freshBoard();
    }, []);

    // Creating a board
    const freshBoard = () => {
        {/* -- TODO 3-1 -- */}
        {/* Useful Hint: createBoard(...) */}
    }

    const restartGame = () => {
        {/* -- TODO 5-2 -- */}
        {/* Useful Hint: freshBoard() */}
        
    }

    // On Right Click / Flag Cell
    const updateFlag = (e, x, y) => {
        // To not have a dropdown on right click
        e.preventDefault();
        // Deep copy of a state
        {/* -- TODO 3-2 -- */}
        {/* Useful Hint: A cell is going to be flagged. 'x' and 'y' are the xy-coordinate of the cell. */}
        {/* Reminder: If the cell is already flagged, you should unflagged it. Also remember to update the board and the remainFlagNum. */}
        {/* Reminder: The cell can be flagged only when it is not revealed. */}
        
    };

    const revealCell = (x, y) => {
        {/* -- TODO 4-1 -- */}
        {/* Reveal the cell */}
        {/* Useful Hint: The function in reveal.js may be useful. You should consider if the cell you want to reveal is a location of mines or not. */}
        {/* Reminder: Also remember to handle the condition that after you reveal this cell then you win the game. */}
        
    };

    return(
        <div className = 'boardPage' >
            <div className = 'boardWrapper' style={{opacity: 1}}>
            <h1>This is the board Page!</h1>  {/* This line of code is just for testing. Please delete it if you finish this function. */}
            {/* -- TODO 3-1 -- */}
            {/* Useful Hint: The board is composed of BOARDSIZE*BOARDSIZE of Cell (2-dimention). So, nested 'map' is needed to implement the board.  */}
            {/* Reminder: Remember to use the component <Cell> and <Dashboard>. See Cell.js and Dashboard.js for detailed information. */}
                <div className="boardContainer">
                    <div className="dashBoard"><Dashboard /></div>
                    <div id="row0" style={{display: "flex"}}>
                        <div id="0-0"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="0-1"><Cell rowIdx={0} colIdx={1} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="0-2"><Cell rowIdx={0} colIdx={2} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="0-3"><Cell rowIdx={0} colIdx={3} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="0-4"><Cell rowIdx={0} colIdx={4} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="0-5"><Cell rowIdx={0} colIdx={5} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="0-6"><Cell rowIdx={0} colIdx={6} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="0-7"><Cell rowIdx={0} colIdx={7} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="0-8"><Cell rowIdx={0} colIdx={8} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="0-9"><Cell rowIdx={0} colIdx={9} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                    </div>
                    <div id="row1" style={{display: "flex"}}>
                        <div id="1-0"><Cell rowIdx={1} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="1-1"><Cell rowIdx={1} colIdx={1} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="1-2"><Cell rowIdx={1} colIdx={2} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="1-3"><Cell rowIdx={1} colIdx={3} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="1-4"><Cell rowIdx={1} colIdx={4} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="1-5"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="1-6"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="1-7"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="1-8"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="1-9"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                    </div>
                    <div id="row2" style={{display: "flex"}}>
                        <div id="2-0"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="2-1"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="2-2"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="2-3"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="2-4"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="2-5"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="2-6"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="2-7"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="2-8"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="2-9"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                    </div>
                    <div id="row3" style={{display: "flex"}}>
                        <div id="3-0"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="3-1"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="3-2"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="3-3"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="3-4"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="3-5"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="3-6"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="3-7"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="3-8"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="3-9"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                    </div>
                    <div id="row4" style={{display: "flex"}}>
                        <div id="4-0"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="4-1"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="4-2"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="4-3"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="4-4"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="4-5"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="4-6"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="4-7"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="4-8"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="4-9"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                    </div>
                    <div id="row5" style={{display: "flex"}}>
                        <div id="5-0"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="5-1"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="5-2"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="5-3"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="5-4"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="5-5"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="5-6"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="5-7"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="5-8"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="5-9"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                    </div>
                    <div id="row6" style={{display: "flex"}}>
                        <div id="6-0"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="6-1"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="6-2"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="6-3"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="6-4"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="6-5"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="6-6"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="6-7"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="6-8"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="6-9"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                    </div>
                    <div id="row7" style={{display: "flex"}}>
                        <div id="7-0"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="7-1"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="7-2"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="7-3"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="7-4"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="7-5"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="7-6"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="7-7"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="7-8"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="7-9"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                    </div>
                    <div id="row8" style={{display: "flex"}}>
                        <div id="8-0"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="8-1"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="8-2"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="8-3"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="8-4"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="8-5"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="8-6"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="8-7"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="8-8"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="8-9"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                    </div>
                    <div id="row9" style={{display: "flex"}}>
                        <div id="9-0"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="9-1"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="9-2"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="9-3"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="9-4"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="9-5"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="9-6"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="9-7"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="9-8"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                        <div id="9-9"><Cell rowIdx={0} colIdx={0} detail={<Cell />} updateFlag={updateFlag} revealCell={revealCell}/></div>
                    </div>
                </div>
            </div>
        </div>
    ); 

    

}

export default Board