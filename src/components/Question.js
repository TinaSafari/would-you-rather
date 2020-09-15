// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {formatQuestion} from '../utils/_DATA'
// import {Link} from "react-router-dom";
//
//
// //Question props: required question_id , question, user
// //shows questions with two options A and B
// //with vote button
//
// // {
// //     id: '8xf0y6ziyjabvozdd253nd',
// //         author: 'sarahedo',
// //     timestamp: 1467166872634,
// //     optionOne: {
// //     votes: ['sarahedo'],
// //         text: 'have horrible short term memory',
// // },
// //     optionTwo: {
// //         votes: [],
// //             text: 'have horrible long term memory'
// //     }
//
//
// class Question extends Component {
//     render() {
//         const {question, user} = this.props
//
//         return (
//             <div className='question'>
//                 <div className='title-question'>
//                 {/*    <img src={user.avatarURL} alt='avatar' className='avatar'/>*/}
//                 {/*    <h3>*/}
//                 {/*        {user.name}<small>{formatQuestion(question.timestamp)}</small>*/}
//                 {/*    </h3>*/}
//                 {/*</div>*/}
//                 {/*<div className='question-body'>*/}
//                 {/*    <h4>Would you rather...?</h4>*/}
//                 {/*    <p>A: {question.optionOne.text}</p>*/}
//                 {/*    <p>B: {question.optionTwo.text}</p>*/}
//                 {/*</div>*/}
//                 {/*<div className='question-footer'>*/}
//                 {/*    <Link to={`/question/${question.id}`}>*/}
//                 {/*        <button className='vote-button'>Vote Here!</button>*/}
//                 {/*    </Link>*/}
//                 </div>
//             </div>
//         )
//     }
// }
//
// function mapStateToProps({questions, users}, {id}) {
//     const question = questions[id]
//     // const question_id = question.id
//     const user = users[question.author]
//
//     return {
//         question,
//         // question_id,
//         user
//     }
// }
//
// export default connect(mapStateToProps)(Question)