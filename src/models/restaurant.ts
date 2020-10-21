import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'
import Image from './image'
import Product from './product'

@Entity('restaurants')
export default class Restaurant {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    week_opens_at: string;

    @Column()
    week_closes_at: string;

    @Column()
    weekend_opens_at: string;

    @Column()
    weekend_closes_at: string;

    @OneToMany(() => Product, product => product.restaurant, { cascade: ['insert', 'update'] })
    @JoinColumn({ name: 'restaurant_id' })
    products: Product;

    @OneToMany(() => Image, image => image.restaurant, { cascade: ['insert', 'update'] })
    @JoinColumn({ name: 'restaurant_id' })
    images: Image[];

}