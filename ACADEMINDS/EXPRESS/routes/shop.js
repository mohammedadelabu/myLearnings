const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;




// const path = require('path'); 

// const express = require('express');

// const rootDir = require('../utils/path');
// const adminData = require('./admin');

// const router = express.Router();

// router.get('/', (req, res, next) => { 
//     // res.send('<h1>Hello from Express!</h1>')
//     // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
//     // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
//     console.log('shop.js', adminData.products);
//     res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// });


// module.exports = router;