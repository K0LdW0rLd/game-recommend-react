import React, {Component} from 'react';

class Comment extends Component {
    constructor () {
        super();
        this.state = {
            show: false
        };
    }
    render(){
        const {show} = this.state;

        return (
            <div>
                <h3>
                    {this.props.title}
                </h3>
                <p>{this.props.name}</p>
                <ul>
                    <li>Pros: {this.props.pros}</li>
                    <li>Cons: {this.props.cons}</li>
                    <li>Replay Value: {this.props.replay}</li> 
                    <li>Would you recommend: {this.props.recommend}</li>
                    <li>Similar Games: {this.props.similar_games}</li>
                </ul>
            </div>
        );
    }
}

export default Comment;
