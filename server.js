
// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('./db.json');
// const middlewares = jsonServer.defaults({
//     static: './public',
// });
// const PORT = process.env.PORT || 5000;
// server.use(middlewares);
// server.use(
//     jsonServer.rewriter({
//         '/api/*': '/$1',
//     }),
// );
// server.use(router);
// server.listen(PORT, () => {
//     console.log(`Server is running ${PORT}`);
// });


const PRODUCTS = require("./db")

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());

app.get('/products-categories', (req, res) => {
    res.json(PRODUCTS["products-categories"])
});

app.get("/:category", (req, res) => {
    const cat = req.params.category;
    res.json(PRODUCTS["products-categories"].filter(item => item.category == cat))
})

app.get('/products-categories/:id', (req, res) => {
    const id = req.params.id;
    const cat = req.params.category;
    const product = PRODUCTS['products-categories'].find(el => el.id == id);
    if (product) {
        res.json(product);
    } else {
        res.json({err: "product not founded"})
    }
})

if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`app is running on port ${PORT}`);
    });

}


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
});
