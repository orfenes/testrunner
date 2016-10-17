import specie from 'specie.js';

class Person{

  constructor(name, idade){
    this._name  = name;
    this._idade = idade;
  }

  get name(){
    return this._name;
  }

  get idade(){    
    return this._idade;
  }

  move(){
    return  'movimentando'; 
  }

  teste(){
    return 'chamando teste do script';
  }

  externo(){
    return specie.fala();
  }

}