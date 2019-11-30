import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity as User } from './user.entity';
import { UserDTO } from './user.dto';
import { CrudService } from 'src/core/crud';

@Injectable()
export class UserService extends CrudService<User> {
    constructor(@InjectRepository(User) userRepository: Repository<User>) {
        super(userRepository);
    }

    async checkIfExists(id: string): Promise<boolean> {
        const count = await this.repository
            .createQueryBuilder('user')
            .where('user.id = :id', { id })
            .getCount();
        return count > 0;
    }

    async findByEmail(email: string): Promise<User> {
        return await this.repository.findOne({
            where: { email },
        });
    }

    async createFormOAuth(data: UserDTO) {
        const user = this.repository.create(data);
        return await this.repository.save(user);
    }
}
