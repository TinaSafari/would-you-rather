import React, {Component} from "react";
import {handleAddQuestion} from '../Actions/questions'


class NewQuestion extends Component {
    state = {
        text: '',
        optionOne: '',
        optionTwo: ''
    }

    handleChange = (e) => {
        const text = e.target.value

        this.setState(() => ({
            text
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {text, optionOne, optionTwo} = this.state
        const {dispatch} = this.props

        dispatch(handleAddQuestion(optionOne, optionTwo))

        // todo: add question to store

        console.log('NnNew question:', {text, optionOne, optionTwo})

        this.setState(() => ({
            text:''
        }))
    }


    render() {
        const {text, optionOne, optionTwo} = this.state

        return (
            <div>
                <h3 className='center'>Creat New Question</h3>
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <span>
                        Would You Rather...
                    </span>
                    <textarea
                        className='form-control'
                        placeholder='Enter option one text here...'
                        value={optionOne.text}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <textarea
                        className='form-control'
                        placeholder='Enter option two text here...'
                        value={optionTwo.text}
                        onChange={this.handleChange}/>
                    <br/>
                    <button className='btn'
                            type='submit'
                    disabled={text === ''}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default NewQuestion