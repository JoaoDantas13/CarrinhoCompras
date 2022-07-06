import { Component, OnInit } from '@angular/core';
import { ICarrinho } from '../model/ICarrinho.model';
import { CarrinhoserviceService } from '../service/carrinhoservice.service';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {
  listaCarrinho: ICarrinho[];

  constructor(private carrinhoService: CarrinhoserviceService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.carrinhoService.buscarTodos().subscribe((retorno) => {
      this.listaCarrinho = retorno;
    });
  }

  //soma o valor total do carrinho
  somaTotal(): number {
    let total = 0;
    this.listaCarrinho?.forEach((item) => {
      total += item.price;
    });
    // if (total > 10) {
    //   console.log('O valor total do carrinho é: ' + total);
    // }
    return total;
  }

  finalizarPedido(): void {
    alert('');
  }
}
