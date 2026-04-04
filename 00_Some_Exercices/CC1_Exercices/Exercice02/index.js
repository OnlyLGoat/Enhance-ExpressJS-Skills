const express = require('express')
const Produits = require('./db')
const app = express()

app.use(express.json())

app.post('/produit', async (req, res) => {
    const { code_produit, nom, prix, date_creation } = req.body
    try{
        const Produit = new Produits({
            code_produit,
            nom,
            prix,
            date_creation
        })
        await Produit.save()
        return res.status(200).json({ message: 'Produit Ajouter !' })
    }catch(err){
        return res.status(500).json(err)
    }
})

app.get('/produit/:code_produit', async (req, res) => {
    const code = req.params.code_produit
    try{
        const Produit = await Produits.findOne({ code_produit: code })
        if(!Produit){
            return res.status(404).json({ message: 'Produit Introuvable !' })
        }
        return res.status(200).json(Produit)
    }catch(err){
        return res.status(500).json(err)
    }
})

app.delete('/produit/:code_produit', async (req, res) => {
    const code = req.params.code_produit
    try{
        const deleteProduit = await Produits.findOneAndDelete({ code_produit: code })
        if(!deleteProduit){
            return res.status(404).json({ message: 'Produit Introuvable !' })
        }
        return res.status(200).json({ message: 'Produit Supprimer !' })
    }catch(err){
        return res.status(500).json(err)
    }
})

app.listen('3001', () => {
    console.log('Serveur Demarer !')
})