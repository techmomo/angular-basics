const findUserById = (users,id)=>{
    return users.find(u => u.id == id);
}

module.exports = {
    findUserById
}