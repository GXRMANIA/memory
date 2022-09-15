import Cards from "./components/Cards";
import Scoreboard from "./components/Scoreboard";
import React, { useState } from "react";
import './style.css' 

function App(props) {

    const [cards, setCards] = useState(["A", "B", "C", "D"]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [alreadyClicked, setAlreadyClicked] = useState([])

    const allCards = ["A", "B", "C", "D", "E", "F", "G" , "H", "I", "J", "K", "L", "M", "N"]
    

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

        for(let i = 0; i<allCards.length; i++) {
            if(!alreadyClicked.includes(allCards[i]) && !randomCards.includes(allCards[i])) {
                console.log(!alreadyClicked.includes(allCards[i]))
                randomCards.push(allCards[i])
                setCards(randomCards)
                return;
            }
            else setScore("You won the game!")
        }

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
            setAlreadyClicked([])
            setScore(0)
        } else {
            setScore(Number(score+1))
            if(score >= highScore) setHighScore(score+1)
            let temp = alreadyClicked;
            temp.push(e.target.textContent)
            setAlreadyClicked(temp)
        }
        
    }
      

    return (
        <div className="App">
        <h1>ABC Memory Game</h1>
        <p>Get points by clicking on an letter but dont click on any more than once!</p>
        <Cards onCardClick={onCardClick} cards={cards}/>
        <Scoreboard score={score} highScore={highScore}/>
        </div>
    );
}

export default App;
