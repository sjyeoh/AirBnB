import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from "typeorm";
import { Owner } from "./Owner";
@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @ManyToOne(type => Owner)
    @JoinColumn({ name: 'owner_id'})
    owner:Owner
    
    @Column({type:'date'})
    created_at: Date;

    @Column({type:'date'})
    updated_at: Date;

}
