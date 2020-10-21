import Product from '../models/product'
import imagesView from './product_images_view'

export default {
    
    render(product: Product){

        return {
            id: product.id,
            id_restaurant: product.id_restaurant,
            name: product.name,
            price: product.price,
            category: product.category,
            sale: product.sale,
            sale_description: product.sale_description,
            sale_price: product.sale_price,
            sale_dow: product.sale_dow,
            sale_schedule_start: product.sale_schedule_start,
            sale_schedule_end: product.sale_schedule_end,
            images: imagesView.renderMany(product.images)
          }

    },

    renderMany(products: Product[]){
        return products.map(product => this.render(product))
    }

}