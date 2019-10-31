import {Entity, PrimaryGeneratedColumn, Column, Double} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @Column()
    booking_id: string;

    @Column()
    amount: Double;

}
