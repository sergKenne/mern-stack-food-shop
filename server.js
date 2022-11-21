
const PRODUCTS = require("./db")

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());

// app.get('/products-categories', (req, res) => {
//     res.json(PRODUCTS["products-categories"])
// });

// app.get("/:category", (req, res) => {
//     const cat = req.params.category;
//     res.json(PRODUCTS["products-categories"].filter(item => item.category == cat))
// })

// app.get('/products-categories/:id', (req, res) => {
//     const id = req.params.id;
//     const cat = req.params.category;
//     const product = PRODUCTS['products-categories'].find(el => el.id == id);
//     if (product) {
//         res.json(product);
//     } else {
//         res.json({err: "product not founded"})
//     }
// })


app.use(express.static(path.resolve(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
});
