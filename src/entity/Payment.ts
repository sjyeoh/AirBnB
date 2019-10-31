import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from "typeorm";
import { Booking } from "./Booking";

@Entity()
export class Payment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @ManyToOne (type => Booking)
    @JoinColumn({name : 'booking_id'})
    booking : Booking

    @Column({type: 'decimal', precision: 5, scale: 2})
    amount: number;

}
