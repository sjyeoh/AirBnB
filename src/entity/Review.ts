import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Property } from "./Property";

@Entity()
export class Reviews {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne( type => Property)
    @JoinColumn({ name : 'property_id'})
    property : Property

    @Column()
    booking_id: string;

    @Column()
    user_id: string;

    @Column()
    ratings: string;

    @Column()
    title: string;

    @Column()
    comments: string;

    @Column({type:'date'})
    updated_at: Date;

    @Column({type:'date'})
    created_at: Date;

}
