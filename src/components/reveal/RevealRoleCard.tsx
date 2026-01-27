import {useState} from "react";
import type {Player} from "../../utils/gameTypes.ts";
import AvatarPlayerCard from "../shared/AvatarPlayerCard.tsx";
import Button from "../shared/Button.tsx";

interface RevealRoleCardProps {
    player: Player
    secretWord: string
    onNext: () => void
    isLastOne: boolean
}

export default function RevealRoleCard({player, secretWord, onNext, isLastOne}: RevealRoleCardProps) {
    const [isRevealed, setIsRevealed] = useState(false);
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
                <AvatarPlayerCard name={player.name} sizeImg={100}/>
                <h2 className="text-3xl font-bold mt-4 mb-6 text-gray-800">{player.name}</h2>

                {
                    !isRevealed ? (
                        <>
                            <p className="text-lg text-gray-600 mb-6">Tap the button below to reveal your role</p>
                            <Button onClick={() => setIsRevealed(true)} fullWidth>Reveal Role</Button>
                        </>
                    ) : (
                        <div className="space-y-6">
                            {
                                player.isImpostor ? (
                                    <div className="bg-red-50 border-4 border-red-500 rounded-xl p-6">
                                        <h3 className="text-2xl font-bold text-red-600 mb-2">Impostor</h3>
                                        <p className="text-gray-700">You gotta guess the secret word.</p>
                                    </div>
                                ) : (
                                    <div className="bg-green-50 border-4 border-green-500 rounded-xl p-6">
                                        <h3 className="text-2xl font-bold text-green-600 mb-2">Innocent</h3>
                                        <p className="text-gray-700 mb-3">The word is:</p>
                                        <div className="bg-white border-2 border-green-400 rounded-lg p-4">
                                            <span className="text-3xl font-bold text-green-700">{secretWord}</span>
                                        </div>
                                    </div>
                                )
                            }

                            <Button onClick={onNext} fullWidth variant={isLastOne? 'success' : 'primary'}>
                                {isLastOne ? 'Start Game' : 'Next Player'}
                            </Button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}