const express = require('express');
const router = express.Router();
const client = require('../db/db');
const jwt = require('jsonwebtoken');

const login = async(req,res)=>{

    console.log("In login");
    try {
        const { userName, password } = req.body;
        const result = await client.query(`Select * from users where username = '${userName}'`);
        let registrationData = result.rows;
        console.log(registrationData);
        if(registrationData.length>0){
            if(registrationData[0].password===password){
                let response = {
                    "status":200,
                    "msg":"User found",
                    "user_name": userName
                };
                let jwtSecretKey = process.env.JWT_SECRET_KEY;
                const token = jwt.sign(response, jwtSecretKey); 
                response.accessToken = token;
                // res.cookie("accessToken","Hello World").send(response);
                // res.status(200).json("success");
                res.send(response);
            }else{
                let response = {
                    "status":400,
                    "msg":"Incorrect User Or Password"
                }
                res.send(response);
            }
        }
        else
        {
            let response = {
                "status":404,
                "msg":"User not exist"
            }
        res.send(response);
    }
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    login
}