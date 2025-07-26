import { getGameById } from "@/shared/services/requests";
import { GamePreview } from "./gamePreview/gamePreview";
import { GameSlider } from "./gameSlider/gameSlider";
import { useEffect, useState } from "react";
import { useParams } from "@tanstack/react-router";

export function GamePage() {
    const [game, setGame] = useState();
    const { gameId } = useParams({ from: '/game-details/$gameId' })
    
    useEffect(() => {
        getGameById(gameId)
            .then(res => setGame(res))
    }, [])

    return (
        <>
            <main className="game-main">
                <GamePreview game={game} />
                <GameSlider game={game} />
            </main>
        </>
    )
}