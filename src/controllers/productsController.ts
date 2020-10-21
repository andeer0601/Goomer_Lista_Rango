import { Request, Response} from 'express'
import { getRepository } from "typeorm"
import Product from "../models/product"
import * as Yup from 'yup'

import ProductView from '../views/products_view'


export default {

    async index(req: Request, res: Response){

        const { restaurant } = req.params

        const productsRepository = getRepository(Product)

        const products = await productsRepository.find({
            where: (`restaurant_id = ${restaurant}`),
            relations: ['images']
        });
        
        res.json(ProductView.renderMany(products))

    },

    async create(req: Request, res: Response){
    
        const { restaurant } = req.params

        const { 
            name,
            price,
            category,
            sale,
            sale_description,
            sale_price,
            sale_dow,
            sale_schedule_start,
            sale_schedule_end
        } = req.body
    
        const productsRepository = getRepository(Product)

        // Pegando as imagens que foram enviadas na requisição
        const reqImages = req.files as Express.Multer.File[]

        const images = reqImages.map(image => {
            return { path: image.filename }
        })

        const data = {
            name,
            price,
            category,
            sale: sale === 'true',
            sale_description,
            sale_price,
            sale_dow,
            sale_schedule_start,
            sale_schedule_end,
            restaurant,
            images
        }

        // Validação dos dados
        const schema = Yup.object().shape({
            name: Yup.string().required('Campo obrigatório'),
            price: Yup.number().required('Campo obrigatório'),
            category: Yup.string().required('Campo obrigatório'),
            sale: Yup.boolean().required('Campo obrigatório'),
            sale_description: Yup.string().required('Campo obrigatório'),
            sale_price: Yup.number().required('Campo obrigatório'),
            sale_dow: Yup.string().required('Campo obrigatório'),
            sale_schedule_start: Yup.string().required('Campo obrigatório'),
            sale_schedule_end: Yup.string().required('Campo obrigatório'),
            restaurant: Yup.number().required('Campo obrigatório'),
            images: Yup.array( Yup.object().shape({
                path: Yup.string().required('Campo obrigatório')
            }))
        })

        await schema.validate(data, {
            abortEarly: false
        })
    
        // Gravando no Banco
        const product = productsRepository.create(data)
    
        await productsRepository.save(product)
        
        res.status(201).json(product)
        
    },

    // Alterar
    async alter(req: Request, res: Response){

        const { restaurant, id } = req.params            
    
        const productRepository = getRepository(Product)
        const productEntity = new Product()

        const productOriginal = await productRepository.findOneOrFail({
            where: pr => { pr.where(`id = ${id}`).andWhere(`restaurant_id = ${restaurant}`)}
        });

        const { name } = req.body
        console.log(`Nome: ${name}`)
        // console.table(productOriginal)

        productEntity.name = ( req.body.name ? req.body.name : productOriginal.name )
        productEntity.price = ( req.body.price ? req.body.price : productOriginal.price )
        productEntity.category = ( req.body.category ? req.body.category : productOriginal.category )
        productEntity.sale = ( req.body.sale ? req.body.sale : productOriginal.sale )
        productEntity.sale_description = ( req.body.sale_description ? req.body.sale_description : productOriginal.sale_description )
        productEntity.sale_price = ( req.body.sale_price ? req.body.sale_price : productOriginal.sale_price )
        productEntity.sale_dow = ( req.body.sale_dow ? req.body.sale_dow : productOriginal.sale_dow )
        productEntity.sale_schedule_start = ( req.body.sale_schedule_start ? req.body.sale_schedule_start : productOriginal.sale_schedule_start )
        productEntity.sale_schedule_end = ( req.body.sale_schedule_end ? req.body.sale_schedule_end : productOriginal.sale_schedule_end )
        productEntity.restaurant = ( req.body.restaurant ? req.body.restaurant : restaurant )


        // Gravando no Banco
        await productRepository.update(id, productEntity)
        
        res.json({ Mensagem: `Produto [ID ${id}] atualizado com sucesso`})
        
    },

    // Deletar
    async delete(req: Request, res: Response){

        const { id } = req.params

        const productRepository = getRepository(Product)

        await productRepository.delete(id);

        res.json({ Mensagem: `Produto [ID ${id}] excluido com sucesso`})

    },
}