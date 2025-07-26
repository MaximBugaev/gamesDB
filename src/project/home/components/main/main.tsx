import { GameCardsList } from "../gameCardsList/gameCardsList";
import { SortAccordeon } from "../sortAccordeon/sortAccordeon";
import './main.css'

export function Main() {
    return (
        <main className="main">
            <SortAccordeon/>
            <GameCardsList />
        </main>
    )
}