import { IsNotEmpty } from 'class-validator';

export class UserDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    token: string;

    @IsNotEmpty()
    gid: string;

    photo: string;
}
