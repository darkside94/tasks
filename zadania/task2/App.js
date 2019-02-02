import React, {
    Component
} from 'react';
import './App.css';


export default class LikeButton extends Component {

    state = {
        clicked: false,
        likes: 100
    }

    buttonClickHandler = () => {
        this.setState(prevState => ({
            clicked: !false,
            likes: prevState.likes + 1
        }));
    };

    // buttonClickHandler = () => {
    //   this.setState({
    //     clicked: !false,
    //     likes: 101
    //   });
    // };

    render() {
        return ( <
            >
            <
            button className = {
                this.state.clicked ? 'liked' : 'like-button'
            }
            onClick = {
                this.buttonClickHandler
            } >
            <
            h2 > Like | {
                this.state.likes
            } < /h2> < /
            button > <
            />
        );
    }
}
