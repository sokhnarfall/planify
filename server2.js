
import minimist from 'minimist';
import express, { Router } from "express"


//res.statur(401)=>Unauthorized
//res.status(200)=>Successful
//res.status(400)=>Bad request
//res.status(500)=>internal server error

//to check a users password and username use mongoose
const Mongoose=require("mongoose")
const express= require("express")


const port = args["port"]  || 5000;

//app.js
import server from './server';
const app = express();
const{register,login}=require("./auth");
app.use(express.json());
app.post('/create', create);
app.post('/login',login)



// Create route
app.post('/create', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // create a new user
    await User.create({
      username,
      password,
      email
    }).then(user=> res.status(201).json({
         message: 'User created successfully' })
    )
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'An error occurred' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // find the user by username and check password
    const user = await User.findOne({ username ,password});

    // check if the user exists and if the password is valid
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
else { res.status(200).json ({message: "Login Successful"}
)}
    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// Delete route
app.delete('/delete/:username', async (req, res) => {
  const { username } = req.params;

  try {
    // find the user by username and delete
    const user = await User.findOneAndDelete({ username });

    // check if the user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(err);
    
    res.status(500).json({ message: 'An error occurred' });
  }
});
