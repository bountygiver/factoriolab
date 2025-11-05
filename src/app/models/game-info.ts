import { Game } from './enum/game';

/** Game information, nonconfigurable */
export interface GameInfo {
  icon: string;
  route: string;
  label: string;
  modId: string;
}

/** Game information data, nonconfigurable */
export const gameInfo: Record<Game, GameInfo> = {
  [Game.Factorio]: {
    icon: 'game-factorio',
    route: '/pain',
    label: 'options.game.factorio',
    modId: 'pain',
  },
};
