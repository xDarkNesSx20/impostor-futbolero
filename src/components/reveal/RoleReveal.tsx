import type {Player} from "../../utils/gameTypes.ts";
import RevealRoleCard from "./RevealRoleCard.tsx";

interface RoleRevealProps {
    players: Player[]
    secretWord: string
    currentPlayer: number
    onNext: () => void
}

export default function RoleReveal({ players, secretWord, currentPlayer, onNext }: RoleRevealProps) {
    const player = players[currentPlayer]
    const isLastPlayer = currentPlayer === players.length - 1

    return (
        <RevealRoleCard player={player} secretWord={secretWord}
                        onNext={onNext} isLastOne={isLastPlayer}/>
    )
}