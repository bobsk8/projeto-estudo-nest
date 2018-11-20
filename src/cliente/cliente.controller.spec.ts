import { Test, TestingModule } from '@nestjs/testing';
import { ClienteController } from './cliente.controller';

describe('Cliente Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ClienteController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ClienteController = module.get<ClienteController>(ClienteController);
    expect(controller).toBeDefined();
  });
});
