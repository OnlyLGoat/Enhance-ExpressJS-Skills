const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1/ex02produitDB')
    .then(() => console.log('MongoDB Connecter !'))
    .catch((err) => console.log(err))

const produitsSchema = new mongoose.Schema({
    code_produit: Number,
    nom: String,
    prix: Number,
    date_creation: Date
})

const Produits = mongoose.model('Produits', produitsSchema)
module.exports = Produits