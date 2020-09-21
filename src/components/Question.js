import React, {Component} from "react";
import {connect} from "react-redux";
import {formatQuestion} from "../Utils/_DATA";
import {Link} from "react-router-dom";

// question props = 1. "id" comes from parent component
//2.3. "authUser" "question" which make by component from Store

class Question extends Component {
    render() {
        // console.log("Q Object "+ JSON.stringify(this.props))

        const {question, user} = this.props

        if ((question, user) === null) {
            return <p>This question doesn't exist</p>
        }
        // console.log("QQQQ:" + this.props)

        return (
            <div className='question'>
                <img src={user.avatarURL} alt='avatar' className='avatar'/>
                <div className='question-body'>
                    <h4>Would you rather...?</h4>
                    <p>A: {question.optionOne.text}</p>
                    <p>B: {question.optionTwo.text}</p>
                </div>
                <div className='question-footer'>
                    <Link to={`/question/${question.id}`}>
                        <button className='vote-button'>Vote Here!</button>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authUser, users, questions}, {id}) {
    const question = questions[id];
    const user = users[question.author]

    return {
        authUser,
        user,
        question: question
            ? formatQuestion(question)
            : null
    }
}

export default connect(mapStateToProps)(Question)