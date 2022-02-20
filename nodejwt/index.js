const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();


// GET
app.get('/', (req, res) => {

    res.json({
        message: "Hey there! Welcome to this API service"
    });
});


// POST
app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403)
        } else {
            res.json({
                message: 'Posts created....',
                authData
            });
        }
    });
});


app.post('/api/login', (req, res) => {
    const user = {
        id: 1,
        username: 'John',
        email: 'john@gmail.com'
    };

    jwt.sign({ user: user }, 'secretkey', (err, token) => {
        res.json({
            token,
        });
    });
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(' ')[1]
        req.token = bearerToken
        next()
    } else {
        res.sendStatus(403) //forbidden
    }
}

const PORT = process.env.PORT || 5000
app.listen(PORT, (req, res) => {
    console.log(`server started on port ${PORT}`);
})