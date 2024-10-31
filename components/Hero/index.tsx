import React from "react";
import HeroContactBtn from "./HeroContactBtn";
import {
    HeroFilter,
    HeroSection,
    HeroTitle,
    HeroVideo,
} from "./styled/hero.styled";

const setVideoPlaybackRate = function () {
    const $video = window.document.querySelector(
        ".hero-video"
    ) as HTMLVideoElement;
    $video.playbackRate = 0.5;
};

export default function Hero() {
    // React.useEffect(function () {
    //     setVideoPlaybackRate();
    // }, []);

    return (
        <HeroSection>
            <HeroVideo
                className="hero-video"
                src="/video/alavera-video.mp4"
                autoPlay
                muted
                loop
            />
            <HeroFilter />

            <HeroTitle>
                Tu centro <span className="title-orange">comercial</span>{" "}
                <span className="hashtag">#ViveAlavera</span>
            </HeroTitle>

            <HeroContactBtn />
        </HeroSection>
    );
}
