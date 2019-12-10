import { IsNotEmpty } from 'class-validator';
import { InputType, Field } from 'type-graphql';

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

@InputType()
export class GoogleWebLogin {
    @Field() accessToken: string;
    @Field() googleId: string;
    @Field() tokenId: string;
    profileObj: GoogleProfile;
}

@InputType()
export class GoogleProfile {
    email: string;
    familyName: string;
    givenName: string;
    name: string;
    googleId: string;
    imageUrl: string;
}
