﻿import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'

import Product from './product'

@Entity('products_images')
export default class Image {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Product, product => product.images)
    @JoinColumn({ name: 'product_id' })
    product: Product;

}