import React, { Component } from 'react';
import './App.css';


export default class LikeButton extends Component {

  state = {
    clicked: false,
    likes: 100
  }

  buttonClickHandler = () => {

    if (!this.state.clicked) {
      this.setState(prevState => {
        return {
          likes: prevState.likes + 1,
          clicked: !false
        };
      });

    } else {

      this.setState(prevState => {
        return {
          likes: prevState.likes - 1,
          clicked: false
        };
      });

    }
  }

  render() {
    return (
      <>
        <button className={this.state.clicked ? 'liked' : 'like-button'}
          onClick={this.buttonClickHandler}>
          <h2 >Like | {this.state.likes} </h2>
        </button>
      </>
    );
  }
}

