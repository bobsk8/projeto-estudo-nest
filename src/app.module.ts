import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [ClienteModule],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cliente', method: RequestMethod.GET });
  }
}
