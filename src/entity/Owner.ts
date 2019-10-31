import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Owner {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    contact_no: string;

    @Column({type:'date'})
    created_at: Date;

    @Column({type:'date'})
    updated_at: Date;

}
