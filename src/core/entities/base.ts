import {
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';
import { IBaseEntityModel } from './base-entity.model';

export abstract class Base implements IBaseEntityModel {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt?: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt?: Date;
}
