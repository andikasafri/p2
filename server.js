const path = require('path');

require('dotenv').config(); // Load environment variables from .env file

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

console.log(stripeSecretKey, stripePublicKey)

const express = require('express');
const app = express();
const port = 3000
const fs = require ('fs')

app.use(express.static('public'));

app.get('/store.html', function(req, res) {
    fs.readFile('items.json', function(error, data) {
        if(error){
            res.status(500).end()
        } else {
            res.render('store.ejs', {
                stripePublicKey: stripePublicKey,
                items: JSON.parse(data)
            })
        }
    })
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
