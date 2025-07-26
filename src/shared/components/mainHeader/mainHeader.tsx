import { SearchInput } from "./searchInput";
import './mainHeader.css'

export function MainHeader() {
    return (
        <header className="main-header">
            <a href="/home/" className="main-header__logo">Games DB</a>
            <SearchInput />
        </header>
    )
}