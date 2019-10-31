import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Locality {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    locality: string;

    @Column()
    property_id: string;

    @Column({type:'date'})
    updated_at: Date;

    @Column({type:'date'})
    created_at: Date;

}
