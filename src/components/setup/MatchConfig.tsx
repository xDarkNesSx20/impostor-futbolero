import type {Category, Configuration} from "../../utils/gameTypes.ts";
import Button from "../shared/Button.ts";

//Partial is like Optional in Java
interface MatchConfigProps {
    configuration: Configuration
    onChangeConfig: (config: Partial<Configuration>) => void
    onStartGame: () => void
    numPlayers: number
}

const categories: Category[] = ['players', 'teams', 'coaches', 'nations', 'stadiums'];

export default function MatchConfig({configuration, onChangeConfig, onStartGame, numPlayers}: MatchConfigProps) {
    const maxImpostors = Math.floor(numPlayers / 3)
    const allowedToStart = numPlayers >= 4 && configuration.numImpostors > 0
        && configuration.numImpostors <= maxImpostors

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Configuration</h2>

            <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <div className="grid grid-cols-2 gap-2">
                    {
                        categories.map(c => (
                                <button key={c.toString()} onClick={() => {
                                    onChangeConfig({category: c})
                                }}
                                        className={`p-3 rounded-lg border-2 transition-all ${
                                            configuration.category === c ?
                                                'border-blue-500 bg-blue-100 text-blue-700' : 'border-gray-200 hover:border-gray-400'
                                        }`}>
                                    <span className="text-sm font-medium">{c.toUpperCase()}</span>
                                </button>
                            )
                        )
                    }
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Impostors</label>
                <div className="flex items-center gap-4">
                    <input type="range" min="1" max={maxImpostors || 1} value={configuration.numImpostors}
                           onChange={e => onChangeConfig({numImpostors: parseInt(e.target.value)})}
                           className="flex-1" disabled={numPlayers < 4}
                    />
                    <span className="text-2xl font-bold text-blue-600 w-12 text-center">
                        {configuration.numImpostors}
                    </span>
                </div>
                {
                    numPlayers < 4 && (
                        <p className="text-sm text-orange-600 mt-1">
                            At least 4 players are required to play.
                        </p>
                    )
                }
            </div>

            <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Round duration (Seconds)</label>
                <div className="flex gap-2">
                    {
                        [120, 180, 240, 300].map(duration => (
                            <button key={duration} onClick={() => onChangeConfig({durationTimer: duration})}
                            className={`flex-1 py-2 rounded-lg border-2 transition-all ${
                                configuration.durationTimer === duration ?
                                    'border-blue-500 bg-blue-50 text-blue-700 font-semibold' : 'border-gray-200 hover:border-gray-400'
                            }`}>
                                {duration}s
                            </button>
                        ))
                    }
                </div>
            </div>

            <Button onClick={onStartGame} disabled={!allowedToStart} fullWidth variant="success">
                {allowedToStart? 'Start Game': 'You need more players'}
            </Button>
        </div>
    )
}