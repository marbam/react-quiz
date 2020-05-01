import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AnswerPage extends Component {
    constructor () {
        super();
        this.state = {
            category: '',
            categories: [],
            questions: [],
            questionCounts: [],
            questionCount: '',
            questions: []
        }
        this.categoryHandler = this.categoryHandler.bind(this);
        this.questionCountHandler = this.questionCountHandler.bind(this);
        // this.answerHandler = this.answerHandler.bind(this);
    }

    componentDidMount () {
        axios.get('/api/categories').then(response => {
          this.setState({
            categories: response.data
          })
        })
    }

    categoryHandler(event) {
        this.setState({
            category: event.target.value,
            questionCounts: [],
            questionCount: '',
            questions: []
        })

        axios.get('/api/count_questions/'+event.target.value).then(response => {
            this.setState({
              questionCounts: response.data
            })
        })
    }

    questionCountHandler(event) {
        this.setState({
            questionCount: event.target.value
        })

        let url = '/api/questions/'+this.state.category+'/'+event.target.value;

        axios.get(url).then(response => {
            this.setState({
              questions: response.data
            })
        })
    }

    // answerHandler(event) {
    //     console.log(event.target)
    // }

    render() {
        return <div className="col-md-8">
                    <div className="card">
                        <div className="card-header"><h5>Questions!</h5></div>
                        <div className="card-body">
                            <p>Select Your Category:</p>
                            {this.state.categories.map((ob) =>
                                <button
                                    className={`btn ${this.state.category == ob.id ? "btn-success" : "btn-light"}`}
                                    value={ob.id}
                                    key={ob.id}
                                    onClick={this.categoryHandler}
                                >
                                    {ob.name}
                                </button>
                            )}
                            <p>How Many Questions?</p>
                            {this.state.questionCounts.map((count) =>
                                <button
                                className={`btn ${this.state.questionCount == count ? "btn-success" : "btn-light"}`}
                                key={count}
                                value={count}
                                onClick={this.questionCountHandler}
                            >
                                {count}
                            </button>
                            )}

                            {this.state.questions.map((question, qKey) =>
                                <div key={qKey}>
                                    <p>{qKey+1}: {question.text}</p>
                                    {question.answers_in_random_order.map((answer, aKey) =>
                                        <button
                                            className="btn btn-light"
                                            // value={qKey_aKey}
                                            key={aKey}
                                            onClick={this.answerHandler}
                                        >
                                            {answer.text}
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
    }
}

export default AnswerPage;

// if (document.getElementById('example')) {
//     ReactDOM.render(<MainContainer />, document.getElementById('example'));
// }
