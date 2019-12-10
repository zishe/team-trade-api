import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    Logger,
    CallHandler,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const now = Date.now();

        const ctx: any = GqlExecutionContext.create(context);
        const resolverName = ctx.constructorRef.name;
        const info = ctx.getInfo();

        return next
            .handle()
            .pipe(
                tap(() =>
                    Logger.log(
                        `${info.parentType} "${info.fieldName}" ${Date.now() -
                            now}ms`,
                        resolverName,
                    ),
                ),
            );
    }
}
