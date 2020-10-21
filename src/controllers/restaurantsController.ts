import { Request, Response} from 'express'
import { getRepository } from "typeorm"
import Restaurant from "../models/restaurant"
import * as Yup from 'yup'

import RestaurantView from '../views/restaurants_view'


export default {

    // Mostrar todos
    async index(req: Request, res: Response){

        const restaurantRepository = getRepository(Restaurant)

        const restaurants = await restaurantRepository.find({
            relations: ['images']
        });

        res.json(RestaurantView.renderMany(restaurants))

    },

    // Mostrar 1
    async show(req: Request, res: Response){

        const { id } = req.params

        const restaurantRepository = getRepository(Restaurant)

        const restaurant = await restaurantRepository.findOneOrFail(id, {
            relations: ['images']
        });

        res.json(RestaurantView.render(restaurant))

    },

    // Criar
    async create(req: Request, res: Response){

        const { 
            name,
            address,
            week_opens_at,
            week_closes_at,
            weekend_opens_at,
            weekend_closes_at
        } = req.body
    
        const restaurantRepository = getRepository(Restaurant)

        // Pegando as imagens que foram enviadas na requisição
        const reqImages = req.files as Express.Multer.File[]

        const images = reqImages.map(image => {
            return { path: image.filename }
        })

        const data = {
            name,
            address,
            week_opens_at,
            week_closes_at,
            weekend_opens_at,
            weekend_closes_at,
            images
        }

        // Validação dos dados
        const schema = Yup.object().shape({
            name: Yup.string().required('Campo obrigatório'),
            address: Yup.string().required('Campo obrigatório'),
            week_opens_at: Yup.string().required('Campo obrigatório'),
            week_closes_at: Yup.string().required('Campo obrigatório'),
            weekend_opens_at: Yup.string().required('Campo obrigatório'),
            weekend_closes_at: Yup.string().required('Campo obrigatório'),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required()
            }))
        })

        await schema.validate(data, {
            abortEarly: false
        })
    
        // Gravando no Banco
        const restaurant = restaurantRepository.create(data)
    
        await restaurantRepository.save(restaurant)
        
        res.status(201).json(restaurant)
        
    },

    // Alterar
    async alter(req: Request, res: Response){

        const { id } = req.params
    
        const restaurantRepository = getRepository(Restaurant)
        const restaurantEntity = new Restaurant()

        const restaurantOriginal = await restaurantRepository.findOneOrFail(id);


        restaurantEntity.name = ( req.body.name ? req.body.name : restaurantOriginal.name )
        restaurantEntity.address = ( req.body.address ? req.body.address : restaurantOriginal.address )
        restaurantEntity.week_opens_at = ( req.body.week_opens_at ? req.body.week_opens_at : restaurantOriginal.week_opens_at )
        restaurantEntity.week_closes_at = ( req.body.week_closes_at ? req.body.week_closes_at : restaurantOriginal.week_closes_at)
        restaurantEntity.weekend_opens_at = ( req.body.weekend_opens_at ? req.body.weekend_opens_at : restaurantOriginal.weekend_opens_at )
        restaurantEntity.weekend_closes_at = ( req.body.weekend_closes_at ? req.body.weekend_closes_at : restaurantOriginal.weekend_closes_at )

    
        // Gravando no Banco
        await restaurantRepository.update(id, restaurantEntity)
        
        res.json({ Mensagem: `Restaurante [ID ${id}] atualizado com sucesso`})
        
    },

    // Deletar
    async delete(req: Request, res: Response){

        const { id } = req.params

        const restaurantRepository = getRepository(Restaurant)

        await restaurantRepository.delete(id);

        res.json({ Mensagem: `Restaurante [ID ${id}] excluido com sucesso`})

    },
}