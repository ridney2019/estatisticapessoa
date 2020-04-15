import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Declaração do atributos e lista.
  nome =null;
  idade=null;
  pessoas=[];
  pessoaMaisJovem=null;
  pessoaMaisVelha=null;


//Método salvar, adicionar pessoa na lista
//atributos null, limpar os campos de input.
  salvar(){
    this.pessoas.push({
      nome: this.nome,
      idade: this.idade
    });
    this.nome = null;
    this.idade = null;
    this.atualizarEstatisticas();
  } 


  //Método splice, trata a exclusão a partir do
  //índice do aray do objeto e segundo parâmetro indica a qtd de elementos excluído é 1.
  remover(pessoa){
     const i = this.pessoas.indexOf(pessoa);
     this.pessoas.splice(i, 1);
     this.atualizarEstatisticas();
  }  


  //Recurso de ordenação.
  //Object, cria uma cópia do objeto pessoas passado como parâmetro.
  //Método sort, recebe função como parâmetro, função seta utilizada. 
  atualizarEstatisticas(){
    let copia = Object.create(this.pessoas);
    copia.sort((p1: any, p2: any ) => p1.idade - p2.idade);
    this.pessoaMaisJovem = copia[0];

    copia.sort((p1: any, p2: any ) => p2.idade - p1.idade);
    this.pessoaMaisVelha = copia[0];
    
  }
}
