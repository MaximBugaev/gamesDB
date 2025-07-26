import { getAllGames } from "@/shared/services/requests";
import { GameCard } from "./gameCard";
import { useEffect, useState } from "react";
import { useSearch } from "@tanstack/react-router";
import './gameCardsStyles.css'

export function GameCardsList() {
    const [gamesList, setGamesList] = useState([]);
    const { search } = useSearch({ strict: false });
    const selectedTag = useSearch({ strict: false })['sort-type'];
    
    useEffect(() => {
        getAllGames(search, selectedTag)
            .then(res => res.results)
            .then(results => setGamesList(results))
    }, [search, selectedTag])

    const gamesMapList = gamesList
    .map(game => {
        return <GameCard 
            rating={game?.metacritic} 
            name={game.name} 
            platformsList={
                game.parent_platforms?.map(el => el.platform.slug)
            } 
            backgroundURL={game?.background_image}
            link={'/game-details/' + game.id}
            key={game.id}
        /> 
    })
        
    return (
        <div className="game-cards-list">
            {gamesMapList.length === 0 ? 'can`t find games for this request' : gamesMapList}
        </div>
    )
}