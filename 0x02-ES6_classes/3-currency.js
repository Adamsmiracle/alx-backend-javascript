export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get getName() {
    return this._name;
  }

  get getCode() {
    return this._code;
  }

  set setName(name) {
    this._name = name;
  }

  set setCode(code) {
    this._code = code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}