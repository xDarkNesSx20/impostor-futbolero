import {useEffect, useState} from 'react';

interface TimerProps {
    duration: number
    onTimeUp: () => void
}

export default function Timer({duration, onTimeUp}: TimerProps) {
    const [time, setTime] = useState(duration)

    useEffect(() => {
        if (time <= 0) {
            onTimeUp();
            return;
        }

        const interval = setInterval(() => {
            setTime(prevTime => prevTime - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [time, onTimeUp])

    const mins = Math.floor(time / 60)
    const secs = time % 60
    const percent = (time / duration) * 100

    const timerBarColor = () => {
        if (percent > 50) return 'bg-green-500'
        if (percent > 25) return 'bg-yellow-500'
        return 'bg-red-500'
    }

    const timerBgColor = () => {
        if (percent > 50) return 'bg-green-100'
        if (percent > 25) return 'bg-yellow-100'
        return 'bg-red-100'
    }

    return (
        <div className={`${timerBgColor()} rounded-2xl p-8 text-center transition-colors duration-300`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Time remaining</h3>
            <div className={`text-8xl font-bold text-white`}>
                {mins}:{secs.toString().padStart(2, '0')}
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 mt-6">
                <div className={`h-4 rounded-full transition-all duration-100 ${timerBarColor()}`}
                     style={{width: `${percent}%`}}/>
            </div>
        </div>
    )
}