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
    //something wrong here need to be able to fine ID
    handleChangeOptionOne = (e) => {
        const optionOne = e.target.value
        this.setState(()=>({
            optionOne
        }))
    }
    handleChangeOptionTwo = (e) => {
        const optionTwo = e.target.value
        this.setState(()=>({
            optionTwo
        }))
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
        // console.log("New question authUser:" + authUser)
        // console.log("New question users:" + JSON.stringify(users))
        console.log("New question1:" + optionOne)
        console.log("New question2:" + optionTwo)
        console.log("STATE IN RENDER" + JSON.stringify(this.state))


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
                    <input
                        className='form-control'
                        placeholder='Option one...'
                        value={optionOne}
                        onChange={this.handleChangeOptionOne}
                    />
                    <br/>
                    <input
                        id='optionTwo'
                        className='form-control'
                        placeholder='Option two...'
                        value={optionTwo}
                        onChange={this.handleChangeOptionTwo}/>
                    <br/>
                    <button className='btn'
                            type='submit'
                            // disabled={optionOne === '' || optionTwo === ''}
                    >
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