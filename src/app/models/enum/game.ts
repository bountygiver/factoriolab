import { SelectItem } from 'primeng/api';

export enum Game {
  Factorio = 'Factorio',
}

export const gameOptions: SelectItem<Game>[] = [
  { value: Game.Factorio, label: 'options.game.factorio' },
];
