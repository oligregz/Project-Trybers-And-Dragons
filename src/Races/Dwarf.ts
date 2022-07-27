import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80;

  protected static dwarfInstances = 0;

  static createdRacesInstances(): number {
    this.dwarfInstances += 1;
    return this.dwarfInstances;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;