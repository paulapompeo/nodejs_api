const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController.js');


//primeira rota -> mostrar todos
routes.get('/products', ProductController.index);

//mostrar pelo id
routes.get('/products/:id' , ProductController.show);

//post->criar
routes.post('/products', ProductController.store);

//put->atualizar
routes.put('/products/:id', ProductController.update);

//delete
routes.delete('/products/:id', ProductController.destroy);

//exportacao sempre no final
//exportamos pq vamos usar ele dentro do
module.exports = routes;