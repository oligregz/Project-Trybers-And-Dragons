import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private readonly _energy: EnergyType;
  private static archetypesInstances = 0;

  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
  }

  static createdArchetypeInstances(): number {
    this.archetypesInstances += 1;
    return this.archetypesInstances;
  }

  override get energyType(): EnergyType {
    return this._energy;
  }
}

export default Warrior;