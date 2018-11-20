import { Controller, Get, Post, Param, Body, Put, Delete, Req, UseGuards, UseFilters } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { CreateClienteDto } from './dto/create-cliente.dto';
import { ClienteService } from './cliente.service';
import { Cliente } from './interfaces/cliente.interface';
import { ValidationPipe } from 'src/pipe/validation.pipe';
import { ParseIntPipe } from 'src/pipe/parse-int.pipe';
import { RoleGuard } from 'src/guard/role.guard';
import { Role } from 'src/decorator/role.decorator';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';

@Controller('cliente')
@UseFilters(HttpExceptionFilter)
@UseGuards(RoleGuard)
export class ClienteController {

    constructor(
        private readonly clienteService: ClienteService,
    ) { }

    @Get()
    findAll(@Req() req): Observable<Cliente[]> {
        // res.status(HttpStatus.OK).json([]);
        return this.clienteService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id): Observable<any> {
        return this.clienteService.findById(id);
    }

    @Post()
    // @Role('admin')
    async create(@Body(ValidationPipe) createClienteDto: CreateClienteDto) {
        this.clienteService.create(createClienteDto);
    }

    // @Post()
    // @Role('admin')
    // async create(@Body(new ValidationPipe()) createClienteDto: CreateClienteDto) {
    //     this.clienteService.create(createClienteDto);
    // }

    @Put(':id')
    update(@Param('id') id, @Body() updateClienteDto) {
        return `Atualizando o cliente de id ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id) {
        return `Removendo o cliente de id ${id}`;
    }
}
