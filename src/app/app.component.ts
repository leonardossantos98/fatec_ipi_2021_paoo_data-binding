import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome: string;
  esconderCaixa = true;


  alterarNome(nome: string){
    if(!nome){
      this.esconderCaixa = true;
   }
 }

  //nome = "José";
  //idade = 20;

  //lancarDado(){
  //  return Math.floor(Math.random()*6)+1;
  //}

  adicionar(nome: string){
    this.esconderCaixa = !nome;
    this.nome = nome;
  }
}
