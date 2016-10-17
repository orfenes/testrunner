'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _specie = require('specie.js');

var _specie2 = _interopRequireDefault(_specie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person(name, idade) {
    _classCallCheck(this, Person);

    this._name = name;
    this._idade = idade;
  }

  _createClass(Person, [{
    key: 'move',
    value: function move() {
      return 'movimentando';
    }
  }, {
    key: 'teste',
    value: function teste() {
      return 'chamando teste do script';
    }
  }, {
    key: 'externo',
    value: function externo() {
      return _specie2.default.fala();
    }
  }, {
    key: 'name',
    get: function get() {
      return this._name;
    }
  }, {
    key: 'idade',
    get: function get() {
      return this._idade;
    }
  }]);

  return Person;
}();