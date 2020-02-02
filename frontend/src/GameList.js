import React, { Component } from 'react';
import axios from 'axios';
require ('dotenv').config();
console.log(process.env);


class GameList extends Component {
    constructor() {
        super();
        this.state = {
            gameData: [],
            isLoaded: false,
        };
    }
    componentDidMount() {
        console.log('I am doing something')
        const api_key = process.env.API_KEY
        console.log(api_key)
        axios.get(`/api/game/3030-4725/?api_key=${api_key}`)
            .then(res => {
                this.setState({ 
                    isLoaded: true,
                    gameData: res.data });
                console.log(this.state.gameData)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render () {
        return(
            <div>
                <div>Something</div>
            </div>
        );
    }
}

export default GameList;