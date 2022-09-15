import Cards from "./components/Cards";
import Scoreboard from "./components/Scoreboard";
import React, { useState } from "react";


function App(props) {

    const [cards, setCards] = useState(["A", "B", "C"]);
    const [score, setScore] = useState("0");
    const [highScore, setHighScore] = useState("0");
    const [alreadyClicked, setAlreadyClicked] = useState([])

    const allCards = ["A", "B", "C", "D", "E", "F", "G"]

    function displayNewCards(e) {
        let randomCards = [];
        let threeDifferentNumbers = [];
        while(threeDifferentNumbers.length !== 3) {
            let randomInt = getRandomInt(allCards.length);
            if(threeDifferentNumbers.includes(randomInt)) continue;
            threeDifferentNumbers.push(randomInt)
        }
        for(let i = 0; i < threeDifferentNumbers.length; i++) {
            randomCards.push(allCards[threeDifferentNumbers[i]])
        }
        setCards(randomCards)
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    function onCardClick(e) {
        displayNewCards(e);
        checkIfAlreadyClicked(e)
    }

    function checkIfAlreadyClicked(e) {
        console.log(alreadyClicked)
        if(alreadyClicked.includes(e.target.textContent)) {
            console.log("Lost")
        } else {
            let temp = alreadyClicked;
            temp.push(e.target.textContent)
            setAlreadyClicked(temp)
        }
        
    }
      

    return (
        <div className="App">
        <h1>Paladins Memory Game</h1>
        <p>Get points by clicking on an image but dont click on any more than once!</p>
        <Cards onCardClick={onCardClick} cards={cards}/>
        <Scoreboard score={score} highScore={highScore}/>
        </div>
    );
}

export default App;
