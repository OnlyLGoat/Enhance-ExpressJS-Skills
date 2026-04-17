const mongoose = require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/Produit_db")
    .then(() => console.log('Connecter A MongoDB !'))
    .catch((err) => console.log(' error', err));


const ProduitSchema = new mongoose.Schema({
    id_produit: String,
    nom: String,
    description: String,
    prix: Number,
    stock: Number,
    created_at: { type: Date, default: Date.now }
});

const Produit = mongoose.model('produits', ProduitSchema);

module.exports = Produit;