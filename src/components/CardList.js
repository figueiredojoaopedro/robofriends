import React from "react";
import Card from "./Card";

// we would be using props as parameter, but the destructuing makes us able to use the robots word
const CardList = ({robots}) => {
    // notice that i created a function to optimize the code, okay?
    const cardEnumeration = robots.map((user, item) => {
        // an important thing is that you need to put a key in each component, cuz the react need to know what this new dom element is, just to optimise the code, but nothing necessary to make it work.
        return <Card key={item} id={robots[item].id} name={robots[item].name} email={robots[item].email}/>;
    })
    // now, by the syntax of js. to call that function, i need to type {myfunction} `BRACKETS` and everything will work correctly!
    return (
        // and banng, everythins is working fine, the problem is that idk if the images will be the same everytime we just reload the page.
        // probably the same, cuz it works with reserved words
        <div>
            {cardEnumeration};  
        </div>
    );
}

export default CardList;