import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamento = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Angular',
      modelo: 'modelo2',
    },
    {
      conteudo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, perferendis adipisci quod illum vero facilis nobis in voluptas eveniet est nihil expedita, dolorum provident dicta, veritatis tenetur odio architecto deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum placeat aperiam dignissimos repudiandae aut cum distinctio dolores nam? Quas deleniti assumenda aliquid amet',
      autoria: 'Angular',
      modelo: 'modelo1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
