import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamento: Pensamento[] = [];
  paginaAtutal: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service
      .listar(this.paginaAtutal, this.filtro)
      .subscribe((lisataPensamentos) => {
        this.listaPensamento = lisataPensamentos;
      });
  }

  carregarMaisPensamentos() {
    this.service
      .listar(++this.paginaAtutal, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamento.push(...listaPensamentos);
        if (!listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      });
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtutal = 1;
    this.service
      .listar(this.paginaAtutal, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamento = listaPensamentos;
      });
  }
}
