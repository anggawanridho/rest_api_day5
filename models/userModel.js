const users = [];

function push(user) {
    users.push(user);
    return user;
}

function findUser(username) {
    return users.find(user => user.username === username);
}

function listAllUsers() {
    return users;
}

module.exports = { push, findUser, listAllUsers };