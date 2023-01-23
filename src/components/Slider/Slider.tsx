import React, { useEffect, useState } from "react";
import arrowLeft from './assets/arrow-left.svg'
import arrowRight from './assets/arrow-right.svg'
import extendButton from './assets/extend.svg'
import closeButton from './assets/close.svg'
import './Slider.css'
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";

type TypeSliderImageData = {
    url: string,
    toggleFullScreen?: () => void
}

type TypeSliderVideoData = {
    url: string,
    tumbnailUrl: string,
    title?: string,
    text?: string
    toggleFullScreen: () => void,
}

const SlideScrollableImageComponent = (props: TypeSliderImageData) => {
    return (
        <div className="slider-scrollable-image-holder">
            <img className="scrollable-image" src={props.url} alt="" />
        </div>
    );
}

const SlideImageComponent = (props: TypeSliderImageData) => {

    /*
    useEffect(()=>{
        //Preload Image
        const img = new Image();
        img.src = props.nextUrl;
        
        return ()=>{}
    }, [props])
    */

    return (
        <div className="slider-image-holder" style={{ backgroundImage: `url(${props.url})` }}></div>
    );
};

const SlideVideoComponent = (props: TypeSliderVideoData) => {
    return (
        <VideoPlayer url={props.url} thumbnailUrl={props.tumbnailUrl} title={props?.title} text={props?.text} toggleFullScreen={props.toggleFullScreen} />
    );
};

export const Slider = ({ slidesData, fullScreenData }: any) => {
    //console.log(slidesData);

    const [currentIndex, setCurrentIndex] = useState(0);
    const { isFullScreen, toggleFullScreen } = fullScreenData
    const slides = slidesData.items

    useEffect(() => {
        setCurrentIndex(0)
        return () => { }
    }, [slidesData])


    if (!slides || !Array.isArray(slides) || slides.length === 0) return null;

    const length = slides.length;
    const goNext = () => setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
    const goPrev = () => setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);

    const chooseComponent = (v: any) => {
        if (v.componentType === "image") return <SlideImageComponent url={v.url} toggleFullScreen={toggleFullScreen} />
        if (v.componentType === "video") return <SlideVideoComponent url={v.url} tumbnailUrl={v.tumbnailUrl} title={v.title} text={v.text} toggleFullScreen={toggleFullScreen} />
        if (v.componentType === "image-scrollable") return <SlideScrollableImageComponent url={v.url} toggleFullScreen={toggleFullScreen} />
    }

    return <section className="slider-holder">
        {length !== 1 && <img alt="" src={arrowLeft} className="go-prev" onClick={goPrev} />}
        {length !== 1 && <img alt="" src={arrowRight} className="go-next" onClick={goNext} />}
        {isFullScreen && <img alt="" src={closeButton} className="slider-close-button" onClick={toggleFullScreen} />}
        {slides?.map((v: any, i: number) =>
            (i === currentIndex) &&
            <div key={`image-slide-holder${i}`}>
                <div key={`image-slide-${i}`} className="slide active">{chooseComponent(v)}</div>
                {(!isFullScreen && ["image", "image-scrollable"].includes(v.componentType)) && <img alt="" src={extendButton} className="slider-extend-button" onClick={toggleFullScreen} />}
            </div>
        )}
        <div className="slider-dots-holder">
            {slides?.map((v: any, i: number) => <div key={`dot${i}`} className={(i === currentIndex) ? "slider-dot active" : "slider-dot"}></div>)}
        </div>
        {!isFullScreen && <div className="slider-info-holder">
            {slides?.map((v: any, i: number) => <div key={`info${i}`} className={(i === currentIndex) ? "slider-info active" : "slider-info"}>
                {(v.title) ? <div className="slider-info-title">{v.title}</div> : ""}
                {(v.text) ? <div className="slider-info-text">{v.text}</div> : ""}
            </div>)}
        </div>}
    </section>;
};
