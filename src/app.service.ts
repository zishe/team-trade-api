import { Injectable, Post } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }
    @Post()
    postHello(): string {
        return 'Hello World!';
    }
}
