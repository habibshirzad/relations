import { Column, PrimaryGeneratedColumn, Entity, OneToOne } from "typeorm";
import { Channel } from "./channel.entity";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column({ unique: true})
    email: string;



    @OneToOne(() => Channel, channel => channel.user)              // the seccond thing is that we need tell typeorm that this entity has one to one relationship
    channel: Channel        //    first thing is that we have to inform that this entity has a reference to channel



}