import React, {Component} from 'react';
import {handleInitialData} from '../Actions/shared'
import {BrowserRouter as Router} from 'react-router-dom'
import {connect} from "react-redux";
// import Dashboard from "./Dashboard";
import LoadingBar from 'react-redux-loading-bar'
import NewQuestion from "./NewQuestion";


class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <LoadingBar/>
                    {this.props.loading === true
                        ? null
                        : <NewQuestion />}
                </div>
            </Router>
        )
    }
}

function mapStateToProps({ authUser }) {
    return {
        loading: authUser === null
    }
}

export default connect(mapStateToProps)(App);