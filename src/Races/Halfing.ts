import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;

  private static racesInstances = 0;

  static createdRacesInstances(): number {
    this.racesInstances += 1;
    return this.racesInstances;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;