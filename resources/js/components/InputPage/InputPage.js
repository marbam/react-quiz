import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CategoryList from './CategoryList';

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
            showFeedback: false,
            feedback: '',
            feedbackColour: 'green'
        }
        this.updateCategory = this.updateCategory.bind(this);
        this.answer1Handler = this.answer1Handler.bind(this);
        this.answer2Handler = this.answer2Handler.bind(this);
        this.answer3Handler = this.answer3Handler.bind(this);
        this.answer4Handler = this.answer4Handler.bind(this);
        this.questionHandler = this.questionHandler.bind(this);
        this.testButton = this.testButton.bind(this);
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

    answer1Handler () {
        this.setState({
            answer1: event.target.value
        })
    }

    answer2Handler () {
        this.setState({
            answer2: event.target.value
        })
    }

    answer3Handler () {
        this.setState({
            answer3: event.target.value
        })
    }

    answer4Handler () {
        this.setState({
            answer4: event.target.value
        })
    }

    testButton () {
        console.log(this.state);
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

        // bodge to jump around the 'this' within the 'then'
        var localThis = this;

        // submit
        axios.post('/api/save_question', [
            this.state.category,
            this.state.question,
            this.state.answer1,
            this.state.answer2,
            this.state.answer3,
            this.state.answer4
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
        let categories = [{name:'1'}, {name:'2'}, {name:'3'}];
        return <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Enter your question!</div>
                        <div className="card-body">
                            <h4>Select a Category</h4>
                            <CategoryList categories={this.state.categories} updateParent={this.updateCategory}></CategoryList>
                            <label>Question:</label>
                            <input type="text" name="question" value={this.state.question} onKeyUp={this.questionHandler} onChange={this.questionHandler}></input>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>First Answer</td>
                                        <td><input type="text" name="answer1" value={this.state.answer1} onKeyUp={this.answer1Handler} onChange={this.answer1Handler}></input></td>
                                    </tr>
                                    <tr>
                                        <td>Second Answer</td>
                                        <td><input type="text" name="answer2" value={this.state.answer2} onKeyUp={this.answer2Handler} onChange={this.answer2Handler}></input></td>
                                    </tr>
                                    <tr>
                                        <td>Third Answer</td>
                                        <td><input type="text" name="answer3" value={this.state.answer3} onKeyUp={this.answer3Handler} onChange={this.answer3Handler}></input></td>
                                    </tr>
                                    <tr>
                                        <td>Fourth Answer</td>
                                        <td><input type="text" name="answer4" value={this.state.answer4} onKeyUp={this.answer4Handler} onChange={this.answer4Handler}></input></td>

                                    </tr>
                                </tbody>
                            </table>
                            <button type="button" className="btn btn-success btn-block" onClick={this.submitHandler}>Submit</button>
                            <button type="button" onClick={this.testButton}>Test</button>
                            {
                                this.state.showFeedback ?
                                <div style={{color:this.state.feedbackColour}}>{this.state.feedback}</div>
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
