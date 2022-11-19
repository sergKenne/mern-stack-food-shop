
//const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const app = express();
// app.use(cors());
// //app.use(express.static('client/build'));
// app.use(express.static(path.resolve(__dirname, 'client', 'build')));
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`app is running on port ${PORT}`);
// });

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
    static: 'client/build',
});
const PORT = process.env.PORT || 8000;
server.use(middlewares);
server.use(
    jsonServer.rewriter({
        '/api/*': '/$1',
    }),
);
server.use(router);
server.listen(PORT, () => {
    console.log('Server is running');
});
