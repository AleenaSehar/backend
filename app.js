const express = require('express');

const app = express();

const userModel=require('./usermodel');

app.get('/', (req, res) => {
    res.send('hey');
})


app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name:"komal",
        email:"komal@gmail.com",
        username:"komal"
    })
    res.send(createduser);
})

app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({
        username:"aleena"
    },{name:"Aleena Sehar"}, {new:true})
    res.send(updateduser);
})


app.get('/read', async (req, res) => {
    let users = await userModel.find();
    res.send(users);
})

app.get('/delete', async (req, res) => {
    let deletedusers = await userModel.findOneAndDelete({username:"aleena"});
    res.send(deletedusers);
})


app.listen(3001);