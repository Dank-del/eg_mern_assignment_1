const express=require('express');
const mongoose=require('mongoose');
const users = require('./routes/user');
const app=express();
app.use(express.json());

mongoose.connect("mongodb://0.0.0.0:27017/assign_1",{
    useNewUrlParser:true,
    useUnifiedTopology:true})
    .then(()=>console.log('Connection is established'))
    .catch(err=>console.error(err));

app.use('/api/users', users);

const port=process.env.PORT||3000
app.listen(port, ()=>console.log("Server is runing in PORT "+port));