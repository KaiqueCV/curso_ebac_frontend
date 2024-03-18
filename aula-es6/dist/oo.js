"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _hp = /*#__PURE__*/new WeakMap();
// function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//     this.nome = nomeDoPokemon;
//     this.tipo = tipoDoPokemon;
// }
// const pikachu = new Pokemon("Pikachu", "elétrico")
var Pokemon = /*#__PURE__*/function () {
  function Pokemon(nomeDoPokemon, tipoDoPokemon) {
    _classCallCheck(this, Pokemon);
    _classPrivateFieldInitSpec(this, _hp, 100);
    this.nome = nomeDoPokemon;
    this.tipo = tipoDoPokemon;
  }
  _createClass(Pokemon, [{
    key: "atacar",
    value: function atacar(nomeDoAtaque) {
      console.log("".concat(this.nome, " atacou com ").concat(nomeDoAtaque));
    }
  }, {
    key: "recebeuAtaque",
    value: function recebeuAtaque() {
      _classPrivateFieldSet(_hp, this, _classPrivateFieldGet(_hp, this) - 10);
    }
  }, {
    key: "exibeHp",
    value: function exibeHp() {
      console.log(_classPrivateFieldGet(_hp, this));
    }
  }]);
  return Pokemon;
}();
var Pikachu = /*#__PURE__*/function (_Pokemon2) {
  _inherits(Pikachu, _Pokemon2);
  function Pikachu() {
    _classCallCheck(this, Pikachu);
    return _callSuper(this, Pikachu, ['Pikachu', 'Elétrico']);
  }
  _createClass(Pikachu, [{
    key: "atacar",
    value: function atacar() {
      console.log("".concat(this.nome, " atacou com choque do trov\xE3o"));
    }
  }]);
  return Pikachu;
}(Pokemon);
var pikachuDoAsh = new Pikachu();
pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000;
console.log(pikachuDoAsh.hp);
pikachuDoAsh.atacar();
pikachuDoAsh.exibeHp();
var pikachu = new Pokemon('pikachu', 'elétrico');
// pikachu.atacar('choque do trovão')
// pikachu.nome = 'pikachu';
// pikachu.tipo = 'elétrico'

console.log(pikachu);
console.log(pikachuDoAsh);
console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);