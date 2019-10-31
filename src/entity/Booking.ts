import {Entity, PrimaryGeneratedColumn, Column, Double, ManyToOne, JoinColumn} from "typeorm";
import { User } from "./User";
import { Property } from "./Property";

@Entity()
export class Booking {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type=>Property)
    @JoinColumn({name:'property_id'})
    property : Property

    @Column()
    price: Double;

    @Column({type:'date'})
    booking_date: Date;

    @ManyToOne(type=>User)
    @JoinColumn({name: 'user_id'})
    user : User 

    @Column()
    check_in: string;

    @Column()
    check_out: string;

    @Column({type:'date'})
    created_at: Date;

    @Column({type:'date'})
    updated_at: Date;

}
