// require("dotenv").config();
// import dotenv from "dotenv";
// dotenv.config();
import {config} from "dotenv";
config();

import * as userLib from "./backend/lib/userLib.js";
// const todoLib = require("./backend/lib/todoLib");
import * as todoLib from "./backend/lib/todoLib.js";
// const mongoose = require("mongoose");
import mongoose from "mongoose";
// const express = require('express');
import express,{request} from "express";
// const { request } = require("express");
const app = express();
const port = process.env.PORT || 5010;
const options = {
	extensions:['htm','html','css','js','ico','jpg','jpeg','png','svg','pdf'],
	index:['index.html'],
}

app.use(express.static("frontend"));
app.use(express.json());


app.get("/api/todos",function(req,res){
	todoLib.getAllTodos(function(err, todos){
		if(err){
			res.json({status: "error", message: err, data: null});
		}
		else{
			res.json({status: "success", data: todos});
		}
	});
});

app.post("/api/todos", function(req, res){
	const todo = req.body;
	todoLib.createTodo(todo, function(err, dbtodo){
		if(err){
			res.json({status: "error", message: err, data: null});
		}
		else{
			res.json({status: "success", data: dbtodo});
		}
	});
});

app.get("/api/todos/completed",function(req,res){
	todoLib.getAllCompletedTodos(function(err, todos){
		if(err){
			res.json({status: "error", message: err, data: null});
		}
		else{
			res.json({status: "success", data: todos});
		}
	});
});
app.get("/", function(req, res){
	res.sendFile(process.cwd()+"/frontend-react/index.html");
});

app.get("/api/todos/deleted",function(req,res){
	todoLib.getAllDeletedTodos(function(err, todos){
		if(err){
			res.json({status: "error", message: err, data: null});
		}
		else{
			res.json({status: "success", data: todos});
		}
	});
});

app.put(("/api/todos/:todoid"),function(req,res){
	const todo = req.body;
	const todoid = req.params.todoid;
	todoLib.updateTodoById(todoid, todo, function(err, dbtodo){
		if(err){
			res.json({status: "error", message: err, data: null});
		}
		else{
			res.json({status: "success", data: dbtodo});
		}
	});
});

app.delete(("/api/todos/:todoid"),function(req,res){
	const todoid = req.params.todoid;
	todoLib.deleteTodoById(todoid, function(err,dbtodo){
		if(err){
			res.json({status: "error", message: err, data: null});
		}
		else{
			res.json({status: "success", data: dbtodo});
		}
	});
});
app.get("/*",(request,response)=>{
    response.sendFile("/frontend/frontend-react/index.html");
});

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function(err){
	if(err){
		console.error(err);
	}
	else{
		console.log("DB Connected");
		
		app.listen(port, function(){
			console.log("Server running on http://localhost:"+port);
		});
	}
});