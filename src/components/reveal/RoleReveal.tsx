import type {Player} from "../../utils/gameTypes.ts";
import RevealRoleCard from "./RevealRoleCard.tsx";
import {bgsRoute} from "../../utils/constants.ts";

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
        <div className="relative min-h-screen bg-center bg-cover bg-no-repeat p-4 sm:p-6 md:p-8"
            style={{backgroundImage: `url('${bgsRoute}/bg-reveal.webp')`}}>
            <div className="absolute inset-0 bg-black/80"/>
            <div className="relative z-10">
                <RevealRoleCard player={player} secretWord={secretWord}
                                onNext={onNext} isLastOne={isLastPlayer}/>
            </div>
        </div>
    )
}