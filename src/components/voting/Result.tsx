import type {Player} from "../../utils/gameTypes.ts";
import AvatarPlayerCard from "../shared/AvatarPlayerCard.tsx";
import Button from "../shared/Button.tsx";

interface ResultProps {
    deletedPlayer: Player
    winner: 'impostors' | 'innocents' | null
    onContinue: () => void
}

export default function Result({deletedPlayer, winner, onContinue}: ResultProps) {
    if (winner) {
        return (
            <div className={`min-h-screen flex items-center justify-center p-4 ${
                winner === 'innocents' ? 'bg-gradient-to-br from-green-500 to-emerald-600'
                    : 'bg-gradient-to-br from-red-500 to-rose-600'
            }`}>
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        {
                            winner === 'impostors' ? (
                                <span className="text-green-600">Impostors Wins</span>
                            ) : (
                                <span className="text-red-600">Innocent Wins</span>
                            )
                        }
                    </h2>
                    <p className="text-gray-600 mb-6">
                        {
                            winner === 'innocents' ? 'All impostors eliminated'
                                : 'Impostors surpassed innocents'
                        }
                    </p>
                    <Button onClick={onContinue} fullWidth variant={'success'}>New Match</Button>
                </div>
            </div>
        )
    }

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
                <AvatarPlayerCard name={deletedPlayer.name} sizeImg={120}/>
                <h2 className="text-3xl font-bold mt-6 mb-4 text-gray-800">{deletedPlayer.name}</h2>
                <div className={`rounded-xl p-6 mb-6 ${
                    deletedPlayer.isImpostor ? 'bg-red-50 border-4 border-red-500'
                        : 'bg-blue-50 border-4 border-blue-500'
                }`}>
                    <h3 className={`text-3xl font-bold ${
                        deletedPlayer.isImpostor ? 'text-red-600' : 'text-blue-600'
                    }`}>
                        {deletedPlayer.isImpostor ? 'Impostor eliminated.' : 'Innocent eliminated.'}
                    </h3>
                </div>
                <p className="text-gray-600 mb-6">
                    {
                        deletedPlayer.isImpostor ? 'Well done. Catch the other impostors!'
                            : 'Hey, be careful. The impostors still are out there...'
                    }
                </p>
                <Button onClick={onContinue} fullWidth>Continue</Button>
            </div>
        </div>
    )
}