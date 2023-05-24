import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    fullName:string;
    
    @Column()
    country:string;
    
    @Column()
    age:number;
}
