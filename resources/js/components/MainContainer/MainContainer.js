import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputPage from '../InputPage/InputPage';

class MainContainer extends Component {
    constructor () {
        super();
        this.state = {
            action: ''
        }
        this.optionHandler = this.optionHandler.bind(this);
    }

    optionHandler(event) {
        this.setState({
            action: event.target.name
        })
    }

    render() {
        return <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header"><h5>Are you adding questions or answering them?</h5></div>
                            <div className="card-body">
                                <button
                                    className={`btn ${this.state.action == 'add' ? "btn-success" : "btn-light"}`}
                                    name="add"
                                    onClick={this.optionHandler}
                                >
                                    Add New Questions
                                </button>
                                <button
                                    className={`btn ${this.state.action == 'answer' ? "btn-success" : "btn-light"}`}
                                    name="answer"
                                    onClick={this.optionHandler}
                                >
                                    Answer Questions
                                </button>
                            </div>
                        </div>
                    </div>
                    { this.state.action == "add" ? <InputPage></InputPage> : null}
                </div>
    }
}

export default MainContainer;

// if (document.getElementById('example')) {
//     ReactDOM.render(<MainContainer />, document.getElementById('example'));
// }
