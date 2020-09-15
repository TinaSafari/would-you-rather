import React, {Component} from 'react';
import '../App.css';
import {handleInitialData} from '../Actions/shared'
import {BrowserRouter as Router} from 'react-router-dom'
import {connect} from "react-redux";



class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        // const {loggedIn} = this.props;

        return (
            <Router>

                <div className="App">
                    <p>New Start...</p>
                </div>

            </Router>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch
})

export default connect(mapDispatchToProps)(App);