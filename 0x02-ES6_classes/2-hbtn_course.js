export default class HolbertonCourse {
  constructor (name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get getName () {
    return this._name;
  }

  get getLength () {
    return this._name;
  }

  get getSTudents () {
    return this._name;
  }

  set setName (name) {
    this._name = name;
  }

  set setLength (length) {
    this.length = length;
  }

  set setStudents (array) {
    this._students = array;
  }
}
