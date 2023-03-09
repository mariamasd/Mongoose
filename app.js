const mongoose = require("mongoose");
const Blog = require('./blog')

// définir les valeurs pour les shema
const nom = "DIALLO";
const prenom="Mariama";
const adress="hlm";
const age = 23;
const favoriteFood="poulet,avocat";

// connection a la base de donner local avec async await
(async ()=> {
    try {
       await mongoose.connect("mongodb://127.0.0.1/contact");
       console.log("connection reussit avec la base de donnes");

       //Creation d'une instance personne
       const blog = new Blog({nom, prenom, adress, age,favoriteFood})
       const result = await blog.save();
       console.log(result);
       //Ajout de plusieurs document 
const result1 = await Blog.insertMany([
    {
    nom:"BA",
    prenom:"Hamide",
    adress:"Ouakam",
    age:29,
    favoriteFood:"poulet braiser,yassa"
},
{
    nom:"DIOP",
    prenom:"Mansour",
    adress:"Mermoz",
    age:25,
    favoriteFood:"riz au poisson ,mafé"   
},
{
    nom:"DIOP",
    prenom:"demba",
    adress:"Mermoz",
    age:25,
    favoriteFood:"riz au poisson ,mafé"   
},{
    nom:"DIOP",
    prenom:"fatou",
    adress:"Mermoz",
    age:25,
    favoriteFood:"riz au poisson ,mafé"   
},{
    nom:"GAYE",
    prenom:"Moussa",
    adress:"Mermoz",
    age:25,
    favoriteFood:"riz au poisson ,mafé"   
},{
    nom:"BA",
    prenom:"Moussa",
    adress:"Mermoz",
    age:25,
    favoriteFood:"riz au poisson ,mafé"   
},
{
    nom:"NDIAYE",
    prenom:"Fatou",
    adress:"Dakar",
    age:18,
    favoriteFood:"poulet ,yassa"    
},
{
    nom:"DIALLO",
    prenom:"ahmed",
    adress:"sedhiou",
    age:22,
    favoriteFood:"poisson grid ,yassa" 
},
{
    nom:"SEYE",
    prenom:"Seynabou",
    adress:"Yoff",
    age:21,
    favoriteFood:"fast food " 
}
]);
console.log(result1)
//requete de mongoDB
// trouver tout les Enregistrements
const result2= await Blog.find();
console.log(result2)
//trouver les personnes ayant le nom diallo
const result3= await Blog.find({nom: "DIALLO"});
console.log(result3)
//Utilisation du requete .findOne pour renvoyer un seul document argument favoriteFood
const result4= await Blog.findOne({favoriteFood: "poisson grid ,yassa"});
console.log(result4)
//model.findById utilisation de ce requete
const result5= await Blog.findById({_id:"6409d0c8b033046992684e2d"});
console.log(result5)
//Effectuer de nouvelles mises à jour sur un document à l'aide de model.findOneAndUpdate()
const result6= await Blog.findOneAndUpdate({prenom:"Zeyna"},{$set:{prenom:"Fatou"}});
console.log(result6)
//Supprimer un document à l'aide de model.findByIdAndRemove
const result7= await Blog.findByIdAndRemove({ _id:"6409d0c8b033046992684e30"})
console.log(result7)
//MongoDB et Mongoose - Supprimer de nombreux documents avec model.remove()
const result8= await Blog.findOneAndRemove({nom:"Moussa"})
console.log(result8)
//Chain Search Query Helpers pour affiner les résultats de recherche
const result9= await Blog.find().sort({age:1}).limit(20)
console.log(result9)
    } catch (error) {
        console.log(error.message)
    }
})()
