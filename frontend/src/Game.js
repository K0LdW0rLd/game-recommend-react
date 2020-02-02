import React, {Component} from 'react';
import './Game.css';
import axios from 'axios';
import Comment from './Comment';

class Game extends Component {
    constructor () {
        super();
        this.state = {
            isLoaded: false,
            cData: [],
        };
    }
    componentDidMount() {
        console.log('I am doing something')
        axios.get('http://localhost:8000/reviews/')
            .then(res => {
                this.setState({ 
                    isLoaded: true,
                    cData: res.data });
                console.log(this.state.cData)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        const {isLoaded, cData}=this.state;
        const commentBox = cData.map(comment=>{
            return <Comment key = {comment.title}
            title = {comment.title}
            name = {comment.name}
            pros = {comment.pros}
            cons = {comment.cons}
            replay = {comment.replay}
            recommend = {comment.recommend}
            similar_games = {comment.similar_games}
            />})

        if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
        return (
            // <ul>
            //     {cData.map(item => (
            //         <li key={item.title}>
            //         {item.title} {item.name}
            //         </li>
            //         ))}
            // </ul>
            <div>
                <div>{commentBox}</div>
            </div>
            );
        }
    }
}

export default Game;