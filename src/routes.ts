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


export default routes