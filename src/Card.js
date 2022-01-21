// the react technologie works with division of he stuff
// so the page gonna got many cards and it's the most small container/atom we could have there
// that's why we start creating a Card code, that can be reusable for other stuff, obviously, if it's needed
import React from 'react';

const Card = () =>{
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div className='image'>
                <img src='https://robohash.org/themith?200x200' alt='card picture'></img>
            </div>
            <div>
                <h2>The Mith</h2>
                <p>themith@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;