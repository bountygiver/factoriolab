export type Flag =
  | 'beacons'
  | 'beltStack'
  | 'consumptionAsDrain'
  | 'diminishingBeacons'
  | 'duplicators'
  | 'expensive'
  | 'fuels'
  | 'hideMachineSettings'
  | 'inactiveDrain'
  | 'inserterEstimation'
  | 'flowRate'
  | 'fluidCostRatio'
  | 'maximumFactor'
  | 'minimumFactor'
  | 'minimumRecipeTime'
  | 'miningDepletion'
  | 'miningProductivity'
  | 'miningSpeed'
  | 'miningTechnologyBypassLimitations'
  | 'mods'
  | 'overclock'
  | 'pollution'
  | 'power'
  | 'proliferator'
  | 'quality'
  | 'researchSpeed'
  | 'resourcePurity'
  | 'rockets'
  | 'somersloop'
  | 'wagons';

export type FlagSet =
  | 'pain';

export const flags: Record<FlagSet, Set<Flag>> = {
  pain: new Set([
    'beacons',
    'beltStack',
    'diminishingBeacons',
    'fluidCostRatio',
    'fuels',
    'inserterEstimation',
    'maximumFactor',
    'minimumFactor',
    'miningDepletion',
    'miningProductivity',
    'mods',
    'pollution',
    'power',
    'quality',
    'researchSpeed',
    'rockets',
    'wagons',
  ]),
};
