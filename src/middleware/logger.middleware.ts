import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async resolve(name: string): Promise<MiddlewareFunction> {
    // await someAsyncJob();

    return async (req, res, next) => {
      // await someAsyncJob();
      console.log(`Request...`); // [ApplicationModule] Request...
      next();
    };
  }
}
