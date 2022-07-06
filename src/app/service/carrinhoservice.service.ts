import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICarrinho } from '../model/ICarrinho.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoserviceService {
  constructor(private http: HttpClient) {}

  private readonly API: string = 'http://localhost:3000/items';

  buscarTodos(): Observable<ICarrinho[]> {
    return this.http.get<ICarrinho[]>(this.API).pipe(map((retorno) => retorno));
  }
}
