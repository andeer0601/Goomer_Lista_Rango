import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm'
import Image from './image_product'

@Entity('products')
export default class Restaurant {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    category: string;

    @Column()
    sale: boolean;

    @Column()
    sale_description: string;

    @Column()
    sale_price: number;

    @Column()
    sale_dow: string;

    @Column()
    sale_schedule_start: string;

    @Column()
    sale_schedule_end: string;

    @ManyToOne(() => Restaurant, restaurant => restaurant.id)
    @JoinColumn({ name: 'restaurant_id' })
    restaurant: Restaurant;

    @OneToMany(() => Image, image => image.product, { cascade: ['insert', 'update'] })
    @JoinColumn({ name: 'product_id' })
    images: Image[];

}