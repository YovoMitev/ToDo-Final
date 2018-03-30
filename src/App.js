import React, {Component} from 'react';
import './App.css';
import Header from './components/layout/Header'
import Routes from './Routes'

class App extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Header/>
                <div className='container'>
                    <Routes/>
                </div>
            </div>
        );
    }
}

export default App;
