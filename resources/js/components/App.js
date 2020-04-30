import React from 'react';
import ReactDOM from 'react-dom';
import InputPage from './InputPage/InputPage';

function App() {

    return (
        <div className="container">
            <InputPage></InputPage>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
