import { InputType, Field } from 'type-graphql';

@InputType()
export class GoogleProfile {
    @Field() email: string;
    @Field() familyName: string;
    @Field() givenName: string;
    @Field() name: string;
    @Field() googleId: string;
    @Field() imageUrl: string;
}
