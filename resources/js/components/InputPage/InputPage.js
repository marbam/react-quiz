import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CategoryList from './CategoryList';
import './InputPage.css';

class InputPage extends Component {
    constructor () {
        super();
        this.state = {
            category: '',
            categories: [],
            question: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            correctId: '',
            showFeedback: false,
            feedback: '',
            feedbackColour: 'green'
        }
        this.updateCategory = this.updateCategory.bind(this);
        this.answerHandler = this.answerHandler.bind(this);
        this.questionHandler = this.questionHandler.bind(this);
        this.correctHandler = this.correctHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.showFeedbackHandler = this.showFeedbackHandler.bind(this);
    }

    componentDidMount () {
        axios.get('/api/categories').then(response => {
          this.setState({
            categories: response.data
          })
        })
    }

    updateCategory (id) {
        this.setState({
            category: id
        })
    }

    questionHandler () {
        this.setState({
            question: event.target.value
        })
    }

    answerHandler(event) {
        let name = event.target.name;
        this.setState({
            [name]: event.target.value
          });
    }

    correctHandler(event) {
        let correctName = event.target.name;
        let id = correctName.charAt(7);
        this.setState({
            correctId: parseInt(id)
        });
    }

    submitHandler() {
        this.setState({
            feedback: '',
            showFeedback: false
        })

        // check everything is populated then submit it
        if (this.state.category == '') {
            this.showFeedbackHandler('Please select a category!');
            return false;
        }

        if (this.state.question == '') {
            this.showFeedbackHandler('Please enter a question!');
            return false;
        }

        if (this.state.answer1 == '') {
            this.showFeedbackHandler('Please enter your first answer!');
            return false;
        }

        if (this.state.answer2 == '') {
            this.showFeedbackHandler('Please enter your second answer!');
            return false;
        }

        if (this.state.answer3 == '') {
            this.showFeedbackHandler('Please enter your third answer!');
            return false;
        }

        if (this.state.answer4 == '') {
            this.showFeedbackHandler('Please enter your fourth answer!');
            return false;
        }

        if (this.state.correctId == '') {
            this.showFeedbackHandler('Please select the correct answer!');
            return false;
        }

        // bodge to jump around the 'this' within the 'then'
        var localThis = this;

        // submit
        axios.post('/api/save_question', [
            this.state.category,
            this.state.question,
            this.state.answer1,
            this.state.answer2,
            this.state.answer3,
            this.state.answer4,
            this.state.correctId
        ])
        .then(function(response){
            // then wipe everything.
            if (response['status'] == 200) {
                localThis.setState({
                    category: '',
                    question: '',
                    answer1: '',
                    answer2: '',
                    answer3: '',
                    answer4: '',
                    correctId: '',
                    feedback: 'Successfully saved!',
                    feedbackColour: 'green',
                    showFeedback: true
                })
            }
        })
    }

    showFeedbackHandler(errorToShow) {
        this.setState({
            feedbackColour: 'red',
            feedback: errorToShow,
            showFeedback: true,
        })
    }

    render() {
        return <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header"><h5>Enter your question!</h5></div>
                        <div className="card-body">
                            <p>Select a Category:</p>
                            <CategoryList categories={this.state.categories} updateParent={this.updateCategory} selected={this.state.category}></CategoryList>
                            <hr></hr>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Question:</td>
                                        <td><input type="text" className="wideInput form-control" name="question" value={this.state.question} onKeyUp={this.questionHandler} onChange={this.questionHandler}></input></td>
                                    </tr>
                                    <tr>
                                        <td>First Answer: </td>
                                        <td><input type="text" className="thinInput form-control" name="answer1" value={this.state.answer1} onKeyUp={this.answerHandler} onChange={this.answerHandler}></input></td>
                                    </tr>
                                    <tr>
                                        <td>Second Answer: </td>
                                        <td><input type="text" className="thinInput form-control" name="answer2" value={this.state.answer2} onKeyUp={this.answerHandler} onChange={this.answerHandler}></input></td>
                                    </tr>
                                    <tr>
                                        <td>Third Answer: </td>
                                        <td><input type="text" className="thinInput form-control" name="answer3" value={this.state.answer3} onKeyUp={this.answerHandler} onChange={this.answerHandler}></input></td>
                                    </tr>
                                    <tr>
                                        <td>Fourth Answer: </td>
                                        <td><input type="text" className="thinInput form-control" name="answer4" value={this.state.answer4} onKeyUp={this.answerHandler} onChange={this.answerHandler}></input></td>

                                    </tr>
                                </tbody>
                            </table>
                            <p>Select the correct answer:</p>
                            { this.state.answer1 == '' ? null :
                                <button
                                    className={`btn ${this.state.correctId === 1 ? "btn-success" : "btn-light"}`}
                                    name="correct1"
                                    onClick={this.correctHandler}
                                >
                                {this.state.answer1}
                                </button>
                            }
                            { this.state.answer2 == '' ? null :
                                <button
                                    className={`btn ${this.state.correctId === 2 ? "btn-success" : "btn-light"}`}
                                    name="correct2"
                                    onClick={this.correctHandler}
                                >
                                    {this.state.answer2}
                                </button>
                            }
                            { this.state.answer3 == '' ? null :
                                <button
                                    className={`btn ${this.state.correctId === 3 ? "btn-success" : "btn-light"}`}
                                    name="correct3"
                                    onClick={this.correctHandler}
                                >
                                    {this.state.answer3}
                                </button>
                            }
                            { this.state.answer4 == '' ? null :
                                <button
                                    className={`btn ${this.state.correctId === 4 ? "btn-success" : "btn-light"}`}
                                    name="correct4"
                                    onClick={this.correctHandler}
                                >
                                    {this.state.answer4}
                                </button>
                            }
                            <button type="button" className="btn btn-success btn-block lowerButton" onClick={this.submitHandler}>Submit</button>
                            {
                                this.state.showFeedback ?
                                <div className="feedbackButton" style={{color:this.state.feedbackColour}}>{this.state.feedback}</div>
                                : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default InputPage;

if (document.getElementById('example')) {
    ReactDOM.render(<InputPage />, document.getElementById('example'));
}
