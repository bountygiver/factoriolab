import { Game } from './enum/game';
import { ModInfo } from './mod';

export interface AppData {
  mods: ModInfo[];
  modHashV0: string[];
  modHash: string[];
}

export const data: AppData = {
  mods: [
    { id: 'pain', name: 'Randomizer - Pain', game: Game.Factorio, flags: 'pain' },
  ],
  modHashV0: [
    '1.1',
    '1.0',
    '0.17',
    '0.16',
    'bio-industries',
    'bobs',
    'bobs-angels',
    'dsp',
    'factorio-extended-plus',
    'industrial-revolution',
    'krastorio2',
    'krastorio2+se',
    'pyanodons',
    'pyanodons+al',
    'seablock',
    'space-exploration',
    'xander',
  ],
  modHash: [
    'pain'
  ],
};
