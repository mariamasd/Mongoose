
const mongoose = require("mongoose")
//CREATION D'UN SCHEMA
const Personne= new mongoose.Schema({
nom:String,
prenom:String,
adress:String,
age:Number,
favoriteFood:Array
});
//creation d'un model d'instance
const model = mongoose.model("Blog",Personne);
module.exports = model;