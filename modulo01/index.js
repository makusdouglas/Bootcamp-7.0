const express = require('express');

const server = express();

server.use(express.json())


//query params  = ?teste=1
//route params = /users/1
//Request params body = {"name": "diego", "email": "makusdouglas@gmail.com"}

//CRUD
const users = ['Diego', 'Claudio', 'Victor']

function checkUserInArray(req,res,next){
  const user = users[req.params.id]
  if (!user){
    return res.status(400).json({error: 'User does not exists' })
  }
  req.user = user // Criando variavel req.user
  return next()
}

function checkUserExistis(req, res, next){
  if(!req.body.name){
    return res.status(400).json({error: 'User name is required' })
  }
  return next()
}

server.get('/teste', (req, res)=>{

  // const nome = req.params.nome;

  const nome = req.query.nome;
  if (nome){
  console.log(`Recebido via query: ${nome}`);
  return res.json({massage: `Hello ${nome}, bem vindo!` })
}else{ 
  return res.json({massage: `Seja bem vindo!` });
  } 
})
server.get('/users/:id', checkUserInArray, (req, res) =>{
  return res.json(req.user)
})
server.get('/users', (req, res) =>{
  return res.json(users)
})

server.post('/users',checkUserExistis, (req,res)=>{
  const {name} = req.body
  users.push(name);

  return res.json(users)
})

server.put('/users/:id',checkUserInArray, checkUserExistis, (req,res)=>{
  const {id} = req.params
  const {name} = req.body

  users[id] = name

  return res.json(users);

})
server.delete('/users/:id', checkUserInArray, checkUserExistis, (req, res)=>{
  const {id } = req.params
  users.splice

})

server.listen(3010);
