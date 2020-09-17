import React, {Component} from 'react';
import {handleInitialData} from '../Actions/shared'
import {BrowserRouter as Router} from 'react-router-dom'
import {connect} from "react-redux";


class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {

        return (

            <Router>


                <div className="App">
                    <p>New Start...</p>

                </div>

            </Router>
        )
    }
}

function mapStateToProps({ loadingBar }) {
    return {
        loading: loadingBar > 0
    }
}

export default connect(mapStateToProps)(App);