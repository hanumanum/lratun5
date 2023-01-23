import "./ContentAudio.css";
import { Navigate } from "../../components/Navigate/Navigate";
import { useState, useEffect } from 'react';
import {getDataJSON, disableContextMenu} from '../../utilits/functions';
import radioSvgIcon from './assets/radio.svg'
import closeSvgIcon from './assets/close.svg'
import { AudioPlayer, TypeAudioPlayerProps } from '../../components/AudioPlayer/AudioPlayer';


export const RadioBadge = (props: TypeAudioPlayerProps) => {
    const { title, text, imageUrl, date } = props

    return (<div className="content-audio-badge">
        <div className="content-audio-badge-image" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="content-audio-badge-title">{title}</div>
        <div className="content-audio-badge-text">{text}</div>
        <div className="content-audio-badge-date">{date}</div>
        <img className="content-audio-badge-radio-icon" src={radioSvgIcon} />
    </div>)
}

export const ContentAudio = () => {
    const [data, setData] = useState([] as TypeAudioPlayerProps[]);
    const [currentAudio, setCurrentAudio] = useState({} as TypeAudioPlayerProps)

    const feachDataAsync = async () => {
        const data = await getDataJSON(`/data/radio.json`)
        setData(data);
    };

    const selectAudio = (audioData: TypeAudioPlayerProps) => {
        setCurrentAudio(audioData)
    }

    const resetAudo = () => {
        setCurrentAudio({} as TypeAudioPlayerProps)
    }

    useEffect(() => {
        feachDataAsync();

        return () => { };
    }, []);

    useEffect(() => {
        //setCurrentAudio(data[0])
    }, [data])

    return (
        <>
            <div className="holder" onContextMenu={disableContextMenu}>
                <div className="content">
                    <Navigate />
                    <div className="content-audio-badges-holder">
                        {data?.map((v: TypeAudioPlayerProps, i: number) => (
                            <div className="content-audio-badge-container" key={`radio_holder_${i}`} onClick={() => { selectAudio(v) }}>
                                <RadioBadge key={`radio_${i}`} {...v} ></RadioBadge>
                            </div>
                        ))}
                    </div>
                    <div className="content-bottom"></div>
                </div>
            </div>
            {currentAudio?.title && <div className="overlay">
                <img onClick={resetAudo} className="content-popup-overlay-close" alt="" src={closeSvgIcon} />
                <AudioPlayer {...currentAudio} />
            </div>}
        </>
    )
};
