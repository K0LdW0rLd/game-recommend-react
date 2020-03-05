import React, { Component } from 'react';
import axios from 'axios';


class GameList extends Component {
    constructor() {
        super();
        this.state = {
            gameData: [],
            isLoaded: false,
        };
    }
    componentDidMount() {
        const url = `http://localhost:8080/ps3`
        // crossDomain
        axios.get(url)
            .then(res => {
                this.setState({ 
                    isLoaded: true,
                    gameData: res.data});
                console.log(this.state.gameData)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render () {
        let gameResults=this.state.gameData
        const gameList= gameResults.map((game, index) => {
            return (<div key={index}>
                <a href={game.site_detail_url} target="_blank"><img src={game.image[0].small_url} alt='Small game image' height='50px' width='50px'/><p>{game.name}</p></a>
            </div>)
        })

        return(
            <div>
                <div>PlaceHolder</div>
                <div>{gameList}</div>
            </div>
        );
    }
}

export default GameList;