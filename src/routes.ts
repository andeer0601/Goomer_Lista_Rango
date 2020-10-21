import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'
import ProductsController from './controllers/productsController'
import RestaurantController from './controllers/restaurantsController'

const routes = Router()
const upload = multer(uploadConfig)



// Listar Restaurantes
routes.get('/restaurant', RestaurantController.index)

// Buscar um Restaurante
routes.get('/restaurant/:id', RestaurantController.show)

// Criar Restaurante
routes.post('/restaurant', upload.array('images'), RestaurantController.create)

// Alterar um Restaurante
routes.put('/restaurant/:id', RestaurantController.alter)

// Excluir um Restaurante
routes.delete('/restaurant/:id', RestaurantController.delete)

// Listar todos os Produtos de um Restaurante
routes.get('/restaurant/:restaurant/products', ProductsController.index)

// Criar um Produto em um Restaurante
routes.post('/restaurant/:restaurant/products', upload.array('images'), ProductsController.create)

// Listar todos os Produtos de um Restaurante
routes.put('/restaurant/:restaurant/products/:id', ProductsController.alter)

// Deletar um Produtos de um Restaurante
routes.delete('/restaurant/:restaurant/products/:id', ProductsController.delete)


export default routes