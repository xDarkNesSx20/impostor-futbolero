import {useState, useEffect} from "react";

interface WaitingViewProps {
    duration: number;
    onTimeUp: () => void;
    startingPlayerName: string | undefined;
}

export default function WaitingView({duration, onTimeUp, startingPlayerName}: WaitingViewProps) {
    const [time, setTime] = useState(duration)

    useEffect(() => {
        if (time <= 0) {
            onTimeUp()
            return
        }

        const interval = setInterval(() => {
            setTime(prevTime => prevTime - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [time, onTimeUp]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center p-4">
            <div className="p-8 w-full text-center flex flex-col justify-between min-h-80">
                <h3 className="text-3xl font-bold text-center text-[#ddd] w-full">{startingPlayerName} starts</h3>
                <p className="text-lg text-gray-600 mb-6">
                    The game begins in <span className="font-bold text-gray-500">{time} </span> seconds...
                </p>
            </div>
        </div>
    )
}
