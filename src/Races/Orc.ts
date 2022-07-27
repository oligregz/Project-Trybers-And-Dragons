import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;

  private static racesInstances = 0;

  static createdRacesInstances(): number {
    this.racesInstances += 1;
    return this.racesInstances;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;