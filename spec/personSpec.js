/* eslint-env jasmine */
/* global Person */

describe('Person Class', function(){
  
  var objPerson;

  beforeEach(function(){    
    objPerson = new Person('rodrigo', 31);
  });

  it('should return name', function(){            
    expect(objPerson.name).toEqual('rodrigo');
  });

  it('should return ages', function(){
    expect(objPerson.idade).toEqual(31);
  });

  it('should return move', function(){
    expect(objPerson.move()).toEqual('movimentando');
  });

  it('should return teste', function(){
    expect(objPerson.teste()).toEqual('chamando teste do script');
  });

});