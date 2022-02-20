const express = require('express');
const app = express();

const posts = [
    {
        username: 'Kyle',
        title: 'Post 1'
    },
    {
        username: 'Jim',
        title: 'Post 2'
    }
]

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.get('/login', (req, res) => {
    // Authenticate User
})
app.listen(3003);


// const users: UserObject = [];
// let user: UserObject;

// router.post('/users', async (req: Request, res: Response) => {
//   try {
//     const salt = await bcrypt.genSalt()
//     const hashedPassword = await bcrypt.hash(req.body.password, 10)
//     console.log(salt);
//     console.log(hashedPassword);
    
//     const user = { name: req.body.name, password: hashedPassword }
//     users.push(user)
//     res.status(201).send()
    
//   } catch {
//     res.status(500).send()
//   }
// });

// router.post('/users/login', async(req, res) => {
//   const user: any = users.find(user => user.name == req.body.name)
// })

// // router.post('/users' (req: Request, res: Response) => {
// //   user: UserObject = { name: req.body.name, password: req.body.password}
// // })
