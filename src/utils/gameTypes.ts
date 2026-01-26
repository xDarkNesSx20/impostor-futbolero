// src/types/game.ts
export type Stage = 'setup' | 'reveal' | 'playing' | 'voting' | 'result' | 'victory';

export type Category = 'players' | 'teams' | 'coaches' | 'nations' | 'stadiums';

export interface Player {
    id: number;
    name: string;
    isImpostor: boolean;
    isEliminated: boolean;
}

export interface Configuration {
    category: Category;
    numImpostors: number;
    durationTimer: number;
}

export interface GameState {
    stage: Stage;
    players: Player[];
    configuration: Configuration;
    secretWord: string | null;
    eliminatedPlayer: Player | null;
    winner: 'impostors' | 'innocents' | null;
    currentPlayerReveal: number;
}