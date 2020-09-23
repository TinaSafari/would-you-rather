// import React, {Component} from "react";
// import {handleAddQuestion} from '../Actions/questions'
//
//
// class NewQuestion extends Component {
//     state = {
//         text: '',
//         optionOne: '',
//         optionTwo: ''
//     }
//
//     handleChange = (e) => {
//         const text = e.target.value
//
//         this.setState(() => ({
//             text
//         }))
//     }
//     handleSubmit = (e) => {
//         e.preventDefault()
//         const {text, optionOne, optionTwo} = this.state
//         const {dispatch} = this.props
//
//         dispatch(handleAddQuestion(optionOne, optionTwo))
//
//         // todo: add question to store
//
//         console.log('NnNew question:', {text, optionOne, optionTwo})
//
//         this.setState(() => ({
//             text:''
//         }))
//     }
//
//
//     render() {
//         const {text, optionOne, optionTwo} = this.state


import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleAddQuestion} from '../Actions/questions'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    handleChange = (e) => {
        const text = e.target.value

        this.setState(() => {
            return text
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {optionOne, optionTwo} = this.state
        const {dispatch} = this.props

        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState(() => {
            return {
                toHome: true
            }
        })
    }

    render() {
        const {optionOne, optionTwo, toHome} = this.state
        const {authUser, users} = this.props
        console.log("New question authUser:" + authUser)
        console.log("New question users:" + JSON.stringify(users))

        if (toHome === true) {
            return <Redirect to='/'/>
        }

        return (
            <div>
                <h3 className='center'>Creat New Question</h3>
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <span>
                        Would You Rather...
                    </span>
                    <textarea
                        className='form-control'
                        placeholder='Option one...'
                        value={optionOne}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <textarea
                        className='form-control'
                        placeholder='Option two...'
                        value={optionTwo}
                        onChange={this.handleChange}/>
                    <br/>
                    <button className='btn'
                            type='submit'
                            disabled={optionOne === '' || optionTwo === ''}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({authUser, users}) {
    return {
        authUser,
        users,
    };
}

export default connect(mapStateToProps)(NewQuestion)