import { useNavigate, useSearch } from "@tanstack/react-router";
import { useState } from "react"
import lensIcon from 'Images/searchIcon.svg'

export function SearchInput() {
    const search = useSearch({ strict: false });
    const [value, setValue] = useState(search.search || '');
    const navigate = useNavigate();

    function handleClick(value) {
        navigate({
            to: '/home',
            search: (prev) => ({ 
                ...prev,
                search: value,
            }),
            replace: true
        })
    }

    return (
        <div className="header-search">
            <input 
                className="header-search__input" 
                type="text" 
                placeholder="Search 500 000+ games"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
             />

            <button className="header-search-btn" onClick={() => handleClick(value)}>
                <img className="header-search-btn__img" src={lensIcon} />
            </button>
        </div>
    )
}