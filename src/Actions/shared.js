import {getInitialData} from "../Utils/api"
import {receiveQuestions} from "./questions";
import {receiveUsers} from "./users";

export function handleInitialData() {
    return dispatch => {
        return getInitialData().then(({ users, questions }) => {
            console.log("shared - handleInitialData - questions are:" + questions)
            console.log("shared - handleInitialData - users are:" + users)
            dispatch(receiveQuestions(questions));
            dispatch(receiveUsers(users));
        });
    };
}
