const mongoose = require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/Client_db")
    .then(() => console.log('Connecter A MongoDB !'))
    .catch((err) => console.log(' error', err));


const ClientSchema = new mongoose.Schema({
    nom: String,
    email_utilisateur: String,
    password: String
});

const Clients = mongoose.model('Clients', ClientSchema);

module.exports = Clients;