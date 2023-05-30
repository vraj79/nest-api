import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CSV {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    identifier: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;
}