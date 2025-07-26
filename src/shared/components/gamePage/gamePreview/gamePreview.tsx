import './gamePreview.css'
import psIcon from 'Images/platforms/ps.svg';
import macIcon from 'Images/platforms/apple.svg';
import windowsIcon from 'Images/platforms/windows.svg';
import linuxIcon from 'Images/platforms/linux.svg';
import xboxIcon from 'Images/platforms/xbox.svg';
import androidIcon from 'Images/platforms/android.svg';
import iosIcon from 'Images/platforms/ios.svg';
import nintendoIcon from 'Images/platforms/nintendo.svg';
import webIcon from 'Images/platforms/web.svg'
import segaIcon from 'Images/platforms/sega.svg';
import commodoreIcon from 'Images/platforms/commodore-amiga.svg'

export function GamePreview({ game }) {
    const platforms = {
        'playstation': psIcon,
        'mac': macIcon,
        'pc': windowsIcon,
        'linux': linuxIcon,
        'xbox': xboxIcon,
        'android': androidIcon,
        'ios': iosIcon,
        'nintendo': nintendoIcon,
        'web': webIcon,
        'sega': segaIcon,
        'commodore-amiga': commodoreIcon
    }

    const ratingColor = game?.metacritic >= 75 ? '#00ce7a' :
                        game?.metacritic >= 50 ? '#ffbd3f' : 
                        game?.metacritic ? '#ff6874' : 'rgba(0, 0, 0, 0)'

    // console.log(game)

    return (
        <div className="game-preview" style={{ backgroundImage: `url(${game?.background_image})` }}>
            <h1 className="game-preview__title">{game?.name}</h1>
            <div className="game-data">
                <span className="game-data__release">Release: {game?.released}</span>
                <div className="game-data__metacritic" style={{ backgroundColor: ratingColor}}>{game?.metacritic}</div>
            </div>
            <div className="game-preview__genres">
                {game?.genres.map(genre => genre.name).join(', ')}
            </div>
            <div className="platforms">
                {game?.parent_platforms.map(el => (
                    <img src={platforms[el.platform.slug]} key={el.platform.slug} alt="" className="platforms__platform-img" />
                ))}
            </div>
        </div>
    )
}