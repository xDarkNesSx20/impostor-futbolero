import {useState} from "react";
import type {GameState, Player, Configuration} from "./utils/gameTypes.ts";
import {assignRoleToPlayers, selectWord, checkWinner} from "./utils/gameFunctions.ts";
import PlayerRegister from "./components/setup/PlayerRegister.tsx";
import MatchConfig from "./components/setup/MatchConfig.tsx";
import RoleReveal from "./components/reveal/RoleReveal.tsx";
import GameView from "./components/game/GameView.tsx";
import VotingPage from "./components/voting/VotingPage.tsx";
import ResultPage from "./components/voting/ResultPage.tsx";

function App() {
    const [gameState, setGameState] = useState<GameState>({
        stage: 'setup', players: [],
        configuration: {
            category: 'players',
            numImpostors: 1,
            durationTimer: 120
        }, secretWord: '', eliminatedPlayer: null,
        winner: null, currentPlayerReveal: 0
    })

    const addPlayer = (name: string) => {
        const newPlayer: Player = {
            id: Date.now(),
            name, isImpostor: false,
            isEliminated: false
        }
        setGameState(prevState => ({
            ...prevState,
            players: [...prevState.players, newPlayer]
        }))
    }

    const deletePlayer = (id: number) => {
        setGameState(prevState => ({
            ...prevState,
            players: prevState.players.filter(p => p.id === id)
        }))
    }

    const changeConfig = (config: Partial<Configuration>) => {
        setGameState(prevState => ({
            ...prevState,
            configuration: {...prevState.configuration, ...config}
        }))
    }

    const startGame = () => {
        const playersWithRole = assignRoleToPlayers(gameState.players, gameState.configuration.numImpostors)
        const chosenWord = selectWord(gameState.configuration.category)

        setGameState(prevState => ({
            ...prevState,
            stage: 'reveal',
            players: playersWithRole,
            secretWord: chosenWord,
            currentPlayerReveal: 0
        }))
    }

    const nextReveal = () => {
        if (gameState.currentPlayerReveal < gameState.players.length - 1) {
            setGameState(prevState => ({
                ...prevState,
                currentPlayerReveal: prevState.currentPlayerReveal + 1
            }))
        } else {
            setGameState(prevState => ({
                ...prevState,
                stage: 'playing'
            }))
        }
    }

    const callVoting = () => {
        setGameState(prevState => ({
            ...prevState,
            stage: 'voting'
        }))
    }

    const eliminateVotedPlayer = (playerId: number) => {
        const playerToEliminate = gameState.players.find(p => p.id === playerId)

        if (playerToEliminate) {
            const updatedPlayers = gameState.players
                .map(p => p.id === playerId ? {...p, isEliminated: true} : p)

            const winner = checkWinner(updatedPlayers)

            setGameState(prevState => ({
                ...prevState,
                stage: 'result',
                players: updatedPlayers,
                eliminatedPlayer: playerToEliminate,
                winner: winner,
            }))
        }
    }

    const continueGame = () => {
        if (gameState.winner) {
            setGameState({
                stage: 'setup', players: [],
                configuration: {
                    category: 'players',
                    numImpostors: 1,
                    durationTimer: 120
                }, secretWord: '', eliminatedPlayer: null,
                winner: null, currentPlayerReveal: 0
            })
        } else {
            setGameState(prevState => ({
                ...prevState,
                stage: 'playing',
                eliminatedPlayer: null
            }))
        }
    }

    switch (gameState.stage) {
        case "setup":
            return (
                <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 p-8">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
                            Impostor Futbolero
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <PlayerRegister players={gameState.players} onAddPlayer={addPlayer}
                                            onDeletePlayer={deletePlayer}/>
                            <MatchConfig configuration={gameState.configuration} onChangeConfig={changeConfig}
                                         onStartGame={startGame} numPlayers={gameState.players.length}/>
                        </div>
                    </div>
                </div>
            );
        case "reveal":
            return (
                <RoleReveal players={gameState.players} secretWord={gameState.secretWord}
                            currentPlayer={gameState.currentPlayerReveal} onNext={nextReveal}/>
            );
        case "playing":
            return (
                <GameView durationTimer={gameState.configuration.durationTimer}
                          onCallVoting={callVoting}/>
            );
        case "voting":
            return (
                <VotingPage players={gameState.players} onDeletePlayer={eliminateVotedPlayer}/>
            );
        case "result":
            return (
                <ResultPage deletedPlayer={gameState.eliminatedPlayer}
                            winner={gameState.winner} onContinue={continueGame}/>
            );
        default:
            return null
    }
}

export default App
