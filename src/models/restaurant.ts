import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

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

}