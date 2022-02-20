// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello World\n')
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })

'use strict'   
class Student {   
   constructor(name, age) {   
      this.n = name;   
      this.a = age;  
   }   
   stu() {   
      console.log("The Name of the student is: ", this.n)   
      console.log("The Age of the student is: ",this. a)   
   }   
}   
  
var stuObj = new Student('Peter',20);   
stuObj.stu();  


//ACCESSING THE FUNCTIONS OF A CLASS

class People {
    constructor(name, origin){
        this.name = name;
        this.origin = origin;
    }
    public(){
    console.log("The name is: ", this.name);
    console.log("The origin is: ", this.origin);
    }
}
let publicObj = new People('Ade', 'Nigerian');
publicObj.public();

const chalk = require('chalk')
console.log(chalk.yellow("My name is Emperor"));


//ACCEPTING INPUT FROM THE COMMAND LINE IN NODE
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
//   readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`)
//     readline.close()
//   })


  //another example
  const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
  


//using inquirer, npm install inquirer
const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?"
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`)
})















