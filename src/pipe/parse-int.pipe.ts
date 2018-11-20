import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Erro na validação');
    }
    return val;
  }
}
