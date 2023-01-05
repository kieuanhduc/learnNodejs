
const connection = require('../config/database');

const getAllUsers = async() => {
    let [results,fields] = await connection.query('SELECT * FROM Users');
    return results;
}

const getUser = async(id) => { 
    let [results,fields] = await connection.query(`SELECT * FROM Users Where id = ${id}`);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const updateUser = async(params) => {
    const {email,name,city,id} = params;

    let [results,fields] = await connection.query(`Update Users Set email = "${email}", name = "${name}" , city = "${city}" Where id = ${id}`);
    return results;
}


const deleteUserById = async(id) => {
    let [results,fields] = await connection.query(`DELETE FROM Users WHERE id = ?`,[id]);
}

module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    deleteUserById
}