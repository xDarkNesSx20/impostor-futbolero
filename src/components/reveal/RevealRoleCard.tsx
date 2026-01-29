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
    const [isRevealed, setIsRevealed] = useState(false)
    const [hasBeenRevealed, setHasBeenRevealed] = useState(false)

    const handleClick = () => {
        setIsRevealed(true)
        setHasBeenRevealed(true)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col gap-10 items-center justify-center p-4">
            <div className="[perspective:1000px] max-w-md w-full">
                <div
                    className="relative w-full min-h-[500px] transition-transform duration-700"
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: isRevealed ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                >
                    {/* Front face */}
                    <div
                        className="absolute inset-0 bg-white rounded-2xl shadow-2xl p-8 w-full text-center flex flex-col justify-between"
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <div className="flex mb-4 gap-4">
                            <AvatarPlayerCard name={player.name} sizeImg={100}/>
                            <h2 className="text-3xl font-bold text-center text-gray-800 w-full flex items-center">
                                {player.name}
                            </h2>
                        </div>
                        <p className="text-lg text-gray-600 mb-6">Tap the button below to reveal your role</p>
                        <Button onClick={() => handleClick()} fullWidth>Reveal Role</Button>
                    </div>

                    {/* Back face */}
                    <div
                        className="absolute inset-0 bg-white rounded-2xl shadow-2xl p-8 w-full text-center flex flex-col justify-between"
                        style={{
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)'
                        }}
                    >
                        <div className="flex mb-4 gap-4">
                            <AvatarPlayerCard name={player.name} sizeImg={100}/>
                            <h2 className="text-3xl font-bold text-center text-gray-800 w-full flex items-center">
                                {player.name}
                            </h2>
                        </div>

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

                            <Button onClick={() => setIsRevealed(false)} fullWidth variant={'secondary'}>
                                Flip again
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {
                hasBeenRevealed && !isRevealed && (
                    <Button onClick={onNext} variant={isLastOne ? 'success' : 'danger'}>
                        {isLastOne ? 'Start Game' : 'Next Player'}
                    </Button>
                )
            }
        </div>
    )
}