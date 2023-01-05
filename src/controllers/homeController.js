const connection = require('../config/database');
const {getAllUsers, getUser, updateUser}  = require("../services/CRUDService");

const getHomePage = async(req,res) => {
    let results =  await getAllUsers();
    console.log(results);
    res.render('home.ejs',{listUsers:results});
}

const createUser = (req,res) => {
    res.render('create.ejs');
}

const postCreateUser = async(req,res) => {
    // console.log(req.body);
    let {email,name,city } = req.body;
    // connection.query(
    //     `INSERT INTO Users (email,name,city) 
    //     VALUES (?,?,?)`, 
    //     [email,name,city],
    //     function(err,results){
    //         console.log(results);
    //         res.send("Create user");
    //     }
    // );

    const [results,field] = await connection.query(
            `INSERT INTO Users (email,name,city) VALUES (?,?,?)`,
            [email,name,city]
    );  
    console.log(results);
    res.send("Create user succedd !");

}


const getUpdateUser = async(req,res) => {
    const {userId} = req.params;
    let results =  await getUser(userId);
    res.render('edit.ejs',{user:results});
}

const postUpdateUser = async(req,res) => {
    let results =  await updateUser({...req.body});
    res.redirect('/');
}

module.exports = {
    getHomePage,
    createUser,
    postCreateUser,
    getUpdateUser,
    postUpdateUser
}