import React from 'react';
import Scroll from "../components/Scroll";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        // what is happening here? so we just asked to fecth a json file at this address
        // then, as the key words says, response return the json file in there, that the name is users
        // so we attach users array of that json file into the robots state key word
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>{return response.json();})
            .then(users => {this.setState({robots:users});});
    }

    searchChange = (event) => {
        console.log(event.target.value);
        this.setState({searchfield: event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter((robots) => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if (this.state.robots.length === 0){
            return <h1 className='white tc'>Loading...</h1>
        }
        else{
            return(
                <div className='tc'>
                    <h1 className='white'>Robofriends!</h1>
                    <SearchBox searchChange = {this.searchChange}/>
                    <Scroll>
                        <CardList robots = {filteredRobots}/>
                    </Scroll>
                </div>
                );
        }
        
    }
}

export default App;