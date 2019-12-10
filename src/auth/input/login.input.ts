import { InputType, Field } from 'type-graphql';
import { GoogleProfile } from './profile.input';

@InputType()
export class GoogleWebLogin {
      @Field() accessToken: string;
      @Field() googleId: string;
      @Field() tokenId: string;
      @Field() profileObj: GoogleProfile;
}
