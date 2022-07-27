import { EnergyType } from '../Energy';

abstract class Archetype {
  readonly name: string;
  readonly special = 0;
  readonly cost = 0;

  constructor(name: string) {
    this.name = name;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType() : EnergyType;
}

export default Archetype;