import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AnswerButton from './AnswerButton';

class Question extends Component {
    constructor () {
        super();
        this.state = {
            answered:false,
            answerKey: null,
            correct: ''
        }
        this.answerClickHandler = this.answerClickHandler.bind(this);
    }

    answerClickHandler(event) {
        let selectedKey = event.target.value;
        let selectedAnswer = this.props.data.answers_in_random_order[selectedKey]

        this.setState({
            answered: true,
            answerKey: selectedKey,
            correct: selectedAnswer.correct
        })

        if (selectedAnswer.correct) {
            this.props.correctCallback(true);
        }
    }

    render() {
        return <div>
                <p>{this.props.data.text}</p>
                {this.props.data.answers_in_random_order.map((answer, aKey)  =>
                    <AnswerButton
                        answer={answer}
                        aKey={aKey}
                        key={aKey}
                        answered={this.state.answered}
                        answerKey={this.state.answerKey}
                        correct={this.state.correct}
                        callBack={this.answerClickHandler}
                    ></AnswerButton>
                )}
            </div>
    }
}

export default Question;