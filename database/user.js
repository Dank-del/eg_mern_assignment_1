const mongoose=require('mongoose');
const Joi=require('joi');

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    qualification:String
});

function validateUser(genre){
    const schema={
        name:Joi.string()
        .required()
        .min(3),
        email:Joi.string()
        .required()
        .min(5),
        password:Joi.string()
        .required()
        .min(6),
        qualification:Joi.string()
        .required()
        .min(3),
    };
    return Joi.validate(genre, schema);
}

const User=mongoose.model('User', userSchema);

exports.User=User;
exports.validate=validateUser;


