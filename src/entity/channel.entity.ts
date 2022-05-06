
import { channel } from "diagnostics_channel";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Video } from "./video.entity";

@Entity()
export class Channel{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;


    @OneToOne(() => User, user => user.channel )  // the seccond thing is that we need tell typeorm that this entity has one to one relationship
    @JoinColumn()  // third thing is to tell tyoeorm where to put the join column.
    user: User        //    first thing is that we have to inform that this entity has a reference to user



    
    @OneToMany(() => Video, video => video.channel)            // one channel can have multiple videos so its a one to many relationship
    videos: Video[]        // if i have a channel i want to reference an arrays of videos/
}