const apiKey = import.meta.env.VITE_API_KEY;

export async function getAllGames(search: string, tag: string) {
    try {
        let url = `https://api.rawg.io/api/games?key=${apiKey}&search=${search}`

        if(tag) {
            url +=  `&tags=${tag}`;
        }

        const response = await fetch(url)

        if(!response.ok) {
            throw new Error('HTTP status: ' + response.status);
        }

        const games = await response.json();
        return games
    } catch(err) {
        console.error(err)
    }
}

export async function getGameById(id: number) {
    try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`)

        if(!response.ok) {
            throw new Error('HTTP status: ' + response.status);
        }

        const games = await response.json();
        return games
    } catch(err) {
        console.error(err)
    }
}

export async function getAllTags() {
    try {
        const response = await fetch(`https://api.rawg.io/api/tags?key=${apiKey}`)

        if(!response.ok) {
            throw new Error('HTTP status: ' + response.status);
        }

        const tags = await response.json();
        return tags
    } catch(err) {
        console.error(err)
    }
}