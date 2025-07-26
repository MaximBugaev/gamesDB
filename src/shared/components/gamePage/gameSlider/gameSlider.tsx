import { SwiperSlide, Swiper } from "swiper/react";

import './gameSlider.css'
import 'swiper/css';
import { useState } from "react";
import { Thumbs } from "swiper/modules";

export function GameSlider({ game }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    console.log(game)
   return (
    <>
        <Swiper 
            modules={[Thumbs]} 
            slidesPerView={3}
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            className="thumbs-swiper"
        >
            <SwiperSlide className="thumbs-slide">About</SwiperSlide>
            <SwiperSlide className="thumbs-slide">Screenshots</SwiperSlide>
            <SwiperSlide className="thumbs-slide">Trailers</SwiperSlide>
        </Swiper>
        <Swiper
            modules={[Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            slidesPerView={1}
            allowTouchMove={false}
        >
            <SwiperSlide>
                <div className="game-slide">
                    <div className="game-slide__platforms game-advantages">
                        Platforms: {game?.parent_platforms.map(el => el.platform.name).join(', ')}
                    </div>
                    <div className="game-slide__publishers game-advantages">
                        Publishers: {game?.publishers.map(el => el.name).join(', ')}
                    </div>
                    <div className="game-slide__website game-advantages">
                        Website: <a href={game?.website}>{game?.website}</a>
                    </div>
                    <div className="game-slide__description">
                        {game?.description_raw}
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="game-slide">
                <div className="game-slide">
                    Not available yet
                </div>
            </SwiperSlide>
            <SwiperSlide className="game-slide">
                <div className="game-slide">
                    Not available yet
                </div>
            </SwiperSlide>
        </Swiper>   
    </> 
    )
}