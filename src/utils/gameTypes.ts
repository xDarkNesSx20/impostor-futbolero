export type Stage = 'setup' | 'reveal' | 'waiting' | 'playing' | 'voting' | 'result'

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
    secretWord: string | '';
    startingPlayer: Player | null;
    eliminatedPlayer: Player | null;
    winner: 'impostors' | 'innocents' | null;
    currentPlayerReveal: number;
}