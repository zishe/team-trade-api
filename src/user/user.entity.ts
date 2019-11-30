import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created: Date;

    @Column({
        unique: true,
    })
    email: string;

    @Column()
    name: string;

    @Column()
    gid: string;

    @Column('text')
    token: string;

    @Column()
    photo: string;
}
