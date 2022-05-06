
import { kMaxLength } from "buffer";
import { diffieHellman } from "crypto";
import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Tag{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}
 