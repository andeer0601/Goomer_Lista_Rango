import Restaurant from '../models/restaurant'
import imagesView from './images_view'

export default {
    
    render(restaurant: Restaurant){

        return {
            id: restaurant.id,
            name: restaurant.name,
            address: restaurant.address,
            week_opens_at: restaurant.week_opens_at,
            week_closes_at: restaurant.week_closes_at,
            weekend_opens_at: restaurant.weekend_opens_at,
            weekend_closes_at: restaurant.weekend_closes_at,
            images: imagesView.renderMany(restaurant.images)
          }

    },

    renderMany(restaurants: Restaurant[]){
        return restaurants.map(restaurant => this.render(restaurant))
    }

}