import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { HttpException } from '@nestjs/common';

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    const message = exception.message.message;
    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toLocaleDateString('pt-BR'),
        path: request.url,
        type: message,
      });
  }
}
