const express = require('express');
const Commande = require('./commande'); 
const app = express();
const axios = require("axios")


app.use(express.json());


app.get('/afficher', (req, res) => {
    Commande.find()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: err.message }));
});

// app.post('/ajouter', async (req, res) => {
//     const response = await axios.get('http://localhost:4000/show', req.body);
//     console.log(response)
//     // const nouveau = new Commande(req.body);
//     // nouveau.save()
//     //     .then(() => res.status(201).json({ message: "Produit Ajouter !" }))
//     //     .catch(err => res.status(400).json({ message: err.message }));
// });

app.post('/ajouter', async (req, res) => {
    try {
        const produits = req.body.produits;

        if (!produits || produits.length === 0) {
            return res.status(400).json({ message: "Produits requis" });
        }

        const response = await axios.post('http://localhost:4000/show', {
            produits: produits 
        });
        console.log(response.data)
        let prix_total = 0

        for (const prod of response.data) {
            prix_total += parseInt(prod.prix)
        }

        const nouvelleCommande = new Commande({
            produits: response.data,
            prix_total: prix_total
        });

        const Commande_Validation = await nouvelleCommande.save();
        if(Commande_Validation){
            const response = await axios.put('http://localhost:4000/reduire_stock', { 
                produits: produits,
                validation: true
            });
            return res.status(201).json({
                message: "Commande ajoutée !",
                commande: response.data,
                prix_total: prix_total
            });
        }

        return res.status(201).json({
            message: "Commande ajoutée !",
            commande: response.data,
            prix_total: prix_total
        });

    } catch (err) {
        return res.status(500).json({
            message: "Erreur lors de la création de la commande",
            error: err.message
        });
    }
});

app.listen(2000, () => {
    console.log("Serveur lancé sur port 2000");
});