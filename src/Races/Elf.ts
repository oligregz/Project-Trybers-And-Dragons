import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;

  private static raceInstances = 0;

  static createdRacesInstances(): number {
    this.raceInstances += 1;
    return this.raceInstances;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;