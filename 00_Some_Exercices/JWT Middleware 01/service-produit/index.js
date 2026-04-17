const express = require('express');
const Produit = require('./produit'); 
const auth = require("./middleware/auth")
const app = express();


app.use(express.json());


app.get('/afficher', auth, (req, res) => {
    Produit.find()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err));
});

app.post('/ajouter', (req, res) => {
    const nouveau = new Produit(req.body);
    nouveau.save()
        .then(() => res.status(201).json({ message: "Produit Ajouter !" }))
        .catch(err => res.status(400).send(err));
});

app.post('/show', async (req, res) => {
    try {
        let id_prods = req.body.produits; 

        console.log(id_prods)

        if (!id_prods) {
            return res.status(400).json({ message: "Produits requis" });
        }

        if (!Array.isArray(id_prods)) {
            id_prods = [id_prods];
        }

        const produits_send = await Produit.find({
            id_produit: { $in: id_prods }
        });

        if (produits_send.length === 0) {
            return res.status(404).json({ message: "Aucun produit trouvé" });
        }

        return res.status(200).json(produits_send);

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

app.put('/reduire_stock', async (req, res) => {
    try{
        let id_prods = req.body.produits;
        let valid = req.body.validation;
        if(!valid){
            return res.status(403).json({"message": "Commande Non Valide !"})
        }
        const Reduction = await Produit.updateMany(
            { id_produit: {$in: id_prods} },
            { $inc: {stock: -1} }
        )
        if(!Reduction){
            return res.status(400).json({ "message": "Reduction Non Valide!" })
        }
        return res.status(200).json({ "message": "Reduction Avec Success !" })
    }catch (err){

    }
})

app.listen(4000, () => {
    console.log("Serveur lancé sur port 4000");
});