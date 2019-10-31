import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Property } from "./Property";

@Entity()
export class Locality {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    locality: string;

    @ManyToMany(type => Property)
    @JoinTable({
        name: 'property_locality',
        joinColumns: [{ name: 'locality_id' }],
        inverseJoinColumns: [{ name: 'property_id' }],
    })
    property: Property[]

}
