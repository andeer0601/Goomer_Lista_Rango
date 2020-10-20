import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'
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
routes.put('/restaurant/:id', upload.array('images'), RestaurantController.alter)

// Excluir um Restaurante
routes.delete('/restaurant/:id', RestaurantController.delete)

// Listar todos os Produtos de um Restaurante
routes.get('/restaurant/:id/products', ProductsController.index)

// Criar um Produto em um Restaurante
routes.post('/restaurant/:id/products', upload.array('images'), ProductsController.create)

// Listar todos os Produtos de um Restaurante
routes.put('/restaurant/:id', upload.array('images'), ProductsController.alter)

// Deletar um Produtos de um Restaurante
routes.delete('/restaurant/:id/products/:id_product', ProductsController.delete)


export default routes