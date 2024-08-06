export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    this._sqft = new Error(
      'Class extending Building must override evacuationWarningMessage',
    );
  }
}
