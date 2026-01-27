import type {Player, Category} from "./gameTypes.ts";
import {WORDS} from "../data/words.ts";

export function assignRoleToPlayers(players: Player[], numImpostors: number): Player[] {
    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5)

    return players.map(p => {
        const isImpostor = shuffledPlayers.slice(0, numImpostors)
            .some(ip => ip.id === p.id)

        return {...p, isImpostor}
        }
    )
}

export function selectWord(category: Category): string {
    const wordsInCategory = WORDS[category]
    const randomIndex = Math.floor(Math.random() * wordsInCategory.length)
    return wordsInCategory[randomIndex]
}

export function checkWinner(players: Player[]): 'impostors' | 'innocents' | null {
    const remainingPlayers= players.filter(p => !p.isEliminated)
    const impostorsAlive = remainingPlayers.filter(p => p.isImpostor)
    const innocentsAlive = remainingPlayers.filter(p => !p.isImpostor)

    if (impostorsAlive.length === 0) {
        return 'innocents'
    }

    if (impostorsAlive.length >= innocentsAlive.length) {
        return 'impostors'
    }

    return null
}