import React from "react";

function Cards(props) {
    return (
      <div>
            {props.cards.map((ele, index) => {
                return <button onClick={props.onCardClick} key={index}>{ele}</button>
            })}
      </div>
    );
  }
  
  export default Cards;
  