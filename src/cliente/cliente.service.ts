import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Cliente } from './interfaces/cliente.interface';

@Injectable()
export class ClienteService {
    private readonly clientes: Cliente[] = [];

    create(cliente: Cliente) {
        this.clientes.push(cliente);
    }

    findAll(): Observable<Cliente[]> {
        return of(this.clientes);
      }
      findById(id): Observable<Cliente> {
        return of(this.clientes.filter(cliente => cliente.id === id)[0]);
      }
}
