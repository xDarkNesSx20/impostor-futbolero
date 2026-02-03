import {useState, type FormEvent} from "react";
import type {Player} from "../../utils/gameTypes.ts";
import AvatarPlayerCard from "../shared/AvatarPlayerCard.tsx";
import Button from "../shared/Button.tsx";

interface PlayerRegisterProps {
    players: Player[]
    onAddPlayer: (name: string) => void
    onDeletePlayer: (id: number) => void
}

export default function PlayerRegister({players, onAddPlayer, onDeletePlayer}: PlayerRegisterProps) {
    const [playerName, setPlayerName] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (playerName.trim() !== '') {
            onAddPlayer(playerName.trim());
            setPlayerName('');
        }
    }

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Players</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="flex gap-2">
                    <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)}
                           placeholder="Player's Name" maxLength={20}
                           className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button type="submit" disabled={!playerName.trim()}>Add</Button>
                </div>
            </form>

            <div className="space-y-2 max-h-96 overflow-y-auto">
                {
                    players.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">No players added yet.</p>
                    ) : (
                        players.map(p => (
                            <div key={p.id}
                                 className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <AvatarPlayerCard name={p.name} sizeImg={40}/>
                                <span className="flex-1 text-gray-800 font-medium">{p.name}</span>
                                <button onClick={() => onDeletePlayer(p.id)}
                                        className="text-red-500 hover:text-red-700 font-bold text-xl">
                                    ×
                                </button>
                            </div>
                        ))
                    )
                }
            </div>

            <div className="mt-4 text-sm text-gray-600 text-center">
                Total: {players.length} player{players.length !== 1 && 's'}
                {
                    players.length < 4 && (<span className="text-orange-600 ml-2">(At least 4 players.)</span>)
                }
            </div>
        </div>
    )
}