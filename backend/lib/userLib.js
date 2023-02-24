// const userModel = require("../models/userModel");
import * as userModel from "../models/userModel.js";
export async function getAllUsers(callBack) {
    try{
        var users = await userModel.find({isDeleted : false});
        callBack(null,users);
    }
    catch(err){
        callBack(err , null);
    }
}

export async function creatFirstUser(callBack) {
    try{
        var user = {
            userName : "shakthimaan",
            yearOfGraduation : 2024

        };
        var newUser = new userModel(user);
        var result = await newUser.save();
        callBack(null,result);
    }
    catch(err){
        callBack(err , null);
    }
}

export async function creatUser(user,callBack) {
    try{
       
        var newUser = new userModel(user);
        var result = await newUser.save();
        callBack(null,result);
    }
    catch(err){
        callBack(err , null);
    }
}

// module.exports.updateUser = async function(userName,data,callBack) {
//     try {
//         var query = {
//             userName : "Jashwanth"
//         };

//         var result = await userModel.updateOne(query, data);
//         callBack(null,result);
//     }
//     catch(err){
//         callBack(err,null);
//     }
// }

export async function deleteUser(userName,callBack) {
    try {
        var query = {
            userName : userName
        };
         var result = await userModel.updateOne(query,{ isDeleted : true});
        callBack(null,result);
    }
    catch(err){
        callBack(err,null);
    }
}

export const getUserByFilter = async function(filter,callBack){
    try{
        var user = await userModel.findOne(filter);  
        callBack(null,user);
    }catch(err) {
        callBack(err,null); 
    }
}