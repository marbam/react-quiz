import React from 'react';
import ReactDOM from 'react-dom';
import InputPage from './InputPage/InputPage';
import MainContainer from './MainContainer/MainContainer';

function App() {

    return (
        <div className="container">
            <MainContainer></MainContainer>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
