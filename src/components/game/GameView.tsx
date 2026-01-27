import Timer from "./Timer.tsx";
import Button from "../shared/Button.tsx";

interface GameViewProps {
    durationTimer: number
    onCallVoting: () => void
}

export default function GameView({durationTimer, onCallVoting}: GameViewProps) {
    return(
        <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
                    <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Impostor Futbolero</h1>
                    <Timer duration={durationTimer} onTimeUp={onCallVoting}/>
                    <div className="mt-8 text-center">
                        <Button onClick={onCallVoting} variant={'danger'} fullWidth>Start Voting</Button>
                    </div>
                </div>

                {/*Should I show the remaining players? I don't think so*/}
            </div>
        </div>
    )
}