const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require("axios")

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 5000;

const sampleUrl = "https://jsonplaceholder.typicode.com/users"



//GET request users data
const getUsers = async()=>{
    try{
        const response = await axios.get(sampleUrl)
        console.log("GET users:", response.data)
    }catch(err){
        console.log("error:", err.message)
    }
}

//POST request
const createUser = async(user)=>{
    try{
        const response = await axios.post(sampleUrl, user)
        console.log("POST user:", response.data)
    }catch(err){
        console.log("error:", err.message)
    }
};

//PUT request

const updateUser = async(id, user)=>{
    try{
        const response = await axios.put(`${sampleUrl}/${id}`, user)
        console.log("PUT update user:", response.data)
    }catch(err){
        console.log("error:", err.message)
    }
}

// DELETE a user
const deleteUser = async(id)=>{
    try{
        const response = await axios.delete(`${sampleUrl}/${id}`)
        console.log("DELETE a user:", response.data)
        console.log(id)
    }catch(err){
        console.log("error:", err.message)
    }
}

// get all users
getUsers()

//POST  create a user
const newUser = {
    name: 'Srikanth',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',

}
createUser(newUser)



//PUT update User data
const updatedUsers = {
    name: 'ram',
        username: 'ram@123',
        email: 'ram@gmail.com',
}
updateUser(1, updatedUsers)


//DELETE a user
deleteUser(7)


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
