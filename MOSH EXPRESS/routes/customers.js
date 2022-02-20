const express = require('express');
const router = express.Router();

const customers = [
    {
        id: 1,
        fullname: 'john doe',
        email: 'john@example.com', // no duplicates allowed.
        gender:'m',
        phone:'+2347085647535',
        address:'1, rantech stop, ',
        notes:'This Customer is owing 10k' //optional, it can be left empty
      },
    {
        id: 2,
        fullname: 'Mack doe',
        email: 'johnz@example.com', // no duplicates allowed.
        gender:'f',
        phone:'+2349085647535',
        address:'20, rantech stop, ',
        notes:'This Customer is owing 5k' //optional, it can be left empty
      }
]


// WELCOME GREETING

router.get('/', (req, res) => {
  res.send('<h1>Welcome to my world</h1>');
});
    
// GET INFO OF ALL CUSTOMERS
router.get('/', (req, res) => {
    res.send(customers);
});

// GET INFO OF CUSTOMERS BY ID
router.get('/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if(!customer) return res.status(404).send('The customer with the given ID was not found')
    res.send(customer);
});
// POST CUSTOMERS INFO
router.post('/', (req, res) => {
    const { error } = validateCustomer(req.body); 
    if(error) return res.status(400).send(error.details[0].message);
        

    const customer = {
        id: customers.length + 1,
        fullname: req.body.fullname,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone,
        address: req.body.address,
        notes: req.body.notes
    };
    customers.push(customer);
    res.send(customer);
});

// UPDATE CUSTOMERS ID @ PUT
router.put('/:id', (req, res) => {
    const customer = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found')
    
    const { error } = validateCustomer(req.body); // Object destructuring; same as result.error as shown above
    if(error) return res.status(400).send(error.details[0].message);
    
    customer.fullname = req.body.fullname;
    customer.email = req.body.email;
    customer.gender = req.body.gender;
    customer.phone = req.body.phone;
    customer.address = req.body.address;
    customer.notes = req.body.notes;
    res.send(customer);
});

function validateCustomer(customer) {
    const schema = {
        fullname: Joi.string().min(3).required(),
        email: Joi.string().email({minDomainSegments: 2, tlds: { allow: ['com', 'net']}}).required(),
        gender: Joi.string().required(),
        phone: Joi.number().min(11).required(),
        address: Joi.string().min(3).required()
    };

    return Joi.validate(customer, schema);
}

// DELETE CUSTOMER'S INFO
router.delete('/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if(!customer) return res.status(404).send('The course with the given ID was not found')
    
    const index = courses.indexOf(customer);
    customers.splice(index, 1);
    
    res.send(customer);
});

module.exports = router;