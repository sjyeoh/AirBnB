import {Entity, PrimaryGeneratedColumn, Column, Double, JoinColumn, ManyToOne} from "typeorm";
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

    @Column()
    amount: Double;

}
