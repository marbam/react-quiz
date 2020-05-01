import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AnswerButton extends Component {
    constructor () {
        super();
        this.state = {
        }
    }

    render() {
        let useClass = 'btn-light';
        if(this.props.answered) {
            if(this.props.aKey == this.props.answerKey && this.props.correct) {
                useClass = 'btn-success';
            } else if(this.props.aKey == this.props.answerKey && !this.props.correct) {
                useClass = 'btn-danger';
            }
        }

        return <button
            className={`btn ${useClass}`}
            disabled={this.props.answered}
            onClick={this.props.callBack}
            value={this.props.aKey}
        >
            {this.props.answer.text}
        </button>
    }
}

export default AnswerButton;