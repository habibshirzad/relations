
import { channel } from "diagnostics_channel";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Channel } from "./channel.entity";
import { Tag } from "./tag.entity";
import { User } from "./user.entity";

@Entity()
export class Video{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;


    @ManyToOne(() => Channel, channel => channel.videos )  
    channel: Channel        

    @ManyToMany(() => Tag)
    @JoinTable()
    tags: Tag[]

}

// since we want a relation with channel we have to tell typeorm that there s reference between channel and a Video. 


// note many to many
// i have a video and it has many tags and i want to know which tag are they thats why we need to go to videos and ...