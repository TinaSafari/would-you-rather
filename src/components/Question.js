import React, {Component} from "react";
import {connect} from "react-redux";

class Question extends Component{
    render() {
        return(
            <div className='question'>

            </div>
        )
    }
}

function mapStateToProps({authUser, users, questions}, {id}) {
    const question = questions[id]

    return{
        authUser,
        questions
    }
}

export default connect(mapStateToProps)(Question)