const mongoose = require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/Commande_db")
    .then(() => console.log('Connecter A MongoDB !'))
    .catch((err) => console.log(' error', err));


const CommandeSchema = new mongoose.Schema({
    produits: Array,
    prix_total: Number,
    created_at: { type: Date, default: Date.now }
});

const Commande = mongoose.model('commandes', CommandeSchema);

module.exports = Commande;