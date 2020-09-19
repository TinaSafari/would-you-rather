export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion (question, auth, authUser) {
    const {id, optionOne, optionTwo, timestamp} = question;
    const {name, avatarURL} = auth;

    return {
        name,
        id,
        timestamp,
        avatar: avatarURL,
        optionOne,
        optionTwo,
        hasVoted: includes(optionOne.votes, authUser) || includes(optionTwo.votes, authUser)
    }
}