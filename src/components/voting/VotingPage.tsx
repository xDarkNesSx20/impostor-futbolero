import {useState} from "react";
import type {Player} from "../../utils/gameTypes.ts";
import AvatarPlayerCard from "../shared/AvatarPlayerCard.tsx";
import Button from "../shared/Button.tsx";
import {bgsRoute} from "../../utils/constants.ts";

interface VotingPageProps {
    players: Player[]
    onDeletePlayer: (playerId: number) => void
}

export default function VotingPage({players, onDeletePlayer}: VotingPageProps) {
    const [selectedPlayerId, setSelectedPlayerId] = useState<number | null>(null)
    const playersRemaining = players.filter(player => !player.isEliminated)
    const playerToDelete = players.find(p => p.id === selectedPlayerId)

    return (
        <div className="relative min-h-screen bg-center bg-cover bg-no-repeat p-4 sm:p-6 md:p-8 flex items-center"
             style={{backgroundImage: `url('${bgsRoute}/bg-voting.webp')`}}>
            <div className="absolute inset-0 bg-black/80"/>
            <div className="relative z-10 max-w-3xl mx-auto w-dvw">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
                        Choose who will be eliminated
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {
                            playersRemaining.map(p => (
                                <button key={p.id} onClick={() => setSelectedPlayerId(p.id)}
                                        className={`rounded-xl p-6 border-4 transition-all text-left ${
                                            selectedPlayerId === p.id ? 'bg-red-100 border-red-500 shadow-lg scale-105'
                                                : 'bg-gray-50 border-gray-200 hover:border-red-300 hover:bg-red-50'
                                        }`}>
                                    <div className="flex items-center gap-4">
                                        <AvatarPlayerCard name={p.name} sizeImg={60}/>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-800">{p.name}</h3>
                                        </div>
                                    </div>
                                </button>
                            ))
                        }
                    </div>

                    {
                        playerToDelete && (
                            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 mb-6">
                                <p className="text-center text-gray-700">
                                    <span className="font-bold text-red-600 text-xl">{playerToDelete.name} </span>
                                    will be eliminated.
                                </p>
                            </div>
                        )
                    }

                    <div className="flex gap-4">
                        <Button onClick={() => selectedPlayerId && onDeletePlayer(selectedPlayerId)}
                                variant={'danger'} fullWidth disabled={!selectedPlayerId}>
                            {selectedPlayerId ? 'Vote Player' : 'Select one player'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}