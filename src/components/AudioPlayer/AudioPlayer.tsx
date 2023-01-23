import { useRef, useState, useEffect } from 'react';
import "./AudioPlayer.css"
import { TimeLine } from "../Timeline/TimeLine"
import prevIconSvg from './assets/prev.svg'
import pauseIconSvg from './assets/pause.svg'
import nextIconSvg from './assets/next.svg'
import playIconSvg from './assets/play.svg'

export type TypeAudioPlayerProps = {
    title: string
    text: string
    componentType: string
    imageUrl: string
    date: string
    url: string
}


export const AudioPlayer = (props: TypeAudioPlayerProps) => {
    const { title, text, imageUrl, url } = props
    const [currentTime, setCurrentTime] = useState(0)
    const audioPlayerRef = useRef({} as HTMLAudioElement)
    const timeStep = 10
    const [isPlaying, setIsPlaying] = useState(false)


    const togglePlayingAudio = () => {
        isPlaying ? audioPlayerRef.current.pause() : audioPlayerRef.current.play()
        setIsPlaying(!isPlaying)

        audioPlayerRef.current.ontimeupdate = () => {
            setCurrentTime(audioPlayerRef?.current?.currentTime || 0);
        }
    }

    const changeTime = (seconds: number) => {
        audioPlayerRef.current.currentTime += seconds
    }

    useEffect(() => {
        return () => { }
    }, [url])

    return (<div className="audio-player-holder">
        <img className="audio-player-image" src={imageUrl} />
        <div className="audio-player-title">{title}</div>
        <div className="audio-player-text">{text}</div>
        <audio ref={audioPlayerRef}>
            <source src={url} />
        </audio>
        <TimeLine current={currentTime || 0} total={audioPlayerRef.current.duration || 0} width="300px" />
        <div className="audio-player-controller">
            <img src={prevIconSvg} onClick={() => changeTime(-timeStep)} className="audio-player-prev" />
            <img src={(isPlaying) ? pauseIconSvg : playIconSvg} onClick={togglePlayingAudio} className="audio-player-play" />
            <img src={nextIconSvg} onClick={() => changeTime(timeStep)} className="audio-player-next" />
        </div>
    </div>)

    //TODO: check playIconSvg : pauseIconSvg
    //TODO: adjust bage images
} 