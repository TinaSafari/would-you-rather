import {getInitialData} from "../Utils/api"
import {receiveQuestions} from "./questions";
import {receiveUsers} from "./users";
import {setAuthUser} from "./authUser";

const AUTH_ID = 'sarahedo'

export function handleInitialData() {
    return dispatch => {
        return getInitialData().then(({ users, questions }) => {
            console.log("shared - handleInitialData - questions are:" + questions)
            console.log("shared - handleInitialData - users are:" + users)
            console.log("shared - handleInitialData - auth Users are:" + AUTH_ID )
            dispatch(receiveQuestions(questions));
            dispatch(receiveUsers(users));
            dispatch(setAuthUser(AUTH_ID))
        });
    };
}

