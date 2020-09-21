import React, {Component} from "react";
import {connect} from "react-redux";
import {formatQuestion} from "../Utils/_DATA";

// question props = 1. "id" comes from parent component
//2.3. "authUser" "question" which make by component from Store

class Question extends Component {
    render() {
        console.log("Q Object "+ JSON.stringify(this.props))
        return (
            <div className='question'>

            </div>
        )
    }
}

function mapStateToProps({authUser, users, questions}, {id}) {
    const question = questions[id]

    return {
        authUser,
        question: formatQuestion(question)
    }
}

export default connect(mapStateToProps)(Question)