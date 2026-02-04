import Timer from "./Timer.tsx";
import Button from "../shared/Button.tsx";
import {bgsRoute} from "../../utils/constants.ts";

interface GameViewProps {
    durationTimer: number
    onCallVoting: () => void
}

export default function GameView({durationTimer, onCallVoting}: GameViewProps) {
    return(
        <div className="relative min-h-screen bg-center bg-cover bg-no-repeat p-4 sm:p-6 md:p-8 flex items-center"
             style={{backgroundImage: `url('${bgsRoute}/bg-debate.webp')`}}>
            <div className="absolute inset-0 bg-black/80"/>
            <div className="max-w-3xl mx-auto relative z-10 w-dvw">
                <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
                    <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Impostor Futbolero</h1>
                    <Timer duration={durationTimer} onTimeUp={onCallVoting}/>
                    <div className="mt-8 text-center">
                        <Button onClick={onCallVoting} variant={'danger'} fullWidth>Start Voting</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}