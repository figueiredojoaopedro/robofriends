import React from 'react';
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    searchChange = (event) => {
        console.log(event.target.value);
        this.setState({searchfield: event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter((robots) => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        console.log(filteredRobots);
        return(
            <div className='tc'>
                <h1 className='white'>Robofriends!</h1>
                <SearchBox searchChange = {this.searchChange}/>
                <CardList robots = {filteredRobots}/>
            </div>
            );
    }
}

export default App;