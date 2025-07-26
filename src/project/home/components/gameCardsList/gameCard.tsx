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


export function GameCard({ rating, name, platformsList, backgroundURL, link }) {
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

    const platformsMapArray = platformsList?.map(el => {
        return (
            <li className="platforms-list__item" key={el} title={el}>
                <img className='platforms-list__img' src={platforms[el]} alt={el} />
            </li>
        )
    })

    const ratingColor = rating >= 75 ? '#00ce7a' :
                        rating >= 50 ? '#ffbd3f' : 
                        rating ? '#ff6874' : 'rgba(0, 0, 0, 0)'

    return (
        <a href={link} className="game-cards-list-item" 
            style={{ backgroundImage: `url(${backgroundURL})`}}>
            <div 
                className="game-cards-list-item__rating"
                style={{ backgroundColor: ratingColor }}
            >
                {rating}
            </div>
            <h1 className="game-cards-list-item__title">{name}</h1>
            <ul className="platforms-list">
                {platformsMapArray}
            </ul>
        </a>
    )
}