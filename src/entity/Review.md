import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Reviews {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    property_id: string;

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
