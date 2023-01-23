import './VideoPlayer.css'
import { useEffect, useRef, useState } from 'react'
import { SoundVolumeController } from '../SoundVolumeController/SoundVolumeController'
import { TimeLine } from '../Timeline/TimeLine'
import prevIconSvg from './assets/prev.svg'
import pauseIconSvg from './assets/pause.svg'
import nextIconSvg from './assets/next.svg'
import playIconSvg from './assets/play.svg'
import fullScreenIconSvg from './assets/full-screen.svg'


type TypeVideoPlayerProps = {
    url: string
    thumbnailUrl: string
    toggleFullScreen: () => void
    title?: string
    text?: string
}

export const VideoPlayer = (props: TypeVideoPlayerProps) => {
    const { url, thumbnailUrl, title, text, toggleFullScreen } = props
    const [currentTime, setCurrentTime] = useState(0)
    const [volume, setVolume] = useState(0.5)
    const [isPlaying, setIsPlaying] = useState(false)
    const videoPlayerRef = useRef({} as HTMLVideoElement)
    const timeStep = 10
    const tumbnailFromTimeOfset = 60

    videoPlayerRef.current.onloadedmetadata = () => {
        videoPlayerRef.current.currentTime = tumbnailFromTimeOfset
    }


    const setPlayerVolume = (vol: number) => {
        videoPlayerRef.current.volume = vol
        setVolume(vol)
    }

    const changeBy = (seconds: number) => {
        videoPlayerRef.current.currentTime = currentTime + seconds
    }

    useEffect(() => {
        setIsPlaying(false)

        videoPlayerRef.current.onloadedmetadata = () => {
            videoPlayerRef.current.currentTime = tumbnailFromTimeOfset
        }

        return () => { }
    }, [url])

    const togglePlayingVideo = () => {
        if (!isPlaying && videoPlayerRef.current.currentTime === tumbnailFromTimeOfset) videoPlayerRef.current.currentTime = 0
        isPlaying ? videoPlayerRef.current.pause() : videoPlayerRef.current.play()
        setIsPlaying(!isPlaying)

        videoPlayerRef.current.ontimeupdate = () => {
            setCurrentTime(videoPlayerRef?.current?.currentTime || 0);
        }
    }

    return (
        <div className="video-player-holder">
            <video key={url} ref={videoPlayerRef} poster={thumbnailUrl}>
                <source src={url} />
            </video>
            <div className="video-player-bottom-bar">
                <div className="video-player-meta-holder">
                    {title && <div className='video-player-meta-title'>{title}</div>}
                    {text && <div className='video-player-meta-description'></div>}
                </div>
                <div className='video-player-contols'>
                    <img src={prevIconSvg} onClick={() => changeBy(-timeStep)} className='video-player-prev' />
                    <img src={(isPlaying) ? pauseIconSvg : playIconSvg} onClick={() => togglePlayingVideo()} className='video-player-play' />
                    <img src={nextIconSvg} onClick={() => changeBy(timeStep)} className='video-player-next' />
                </div>
                <TimeLine current={currentTime || 0} total={videoPlayerRef.current.duration || 0} width="200px" />
                <SoundVolumeController setVolume={setPlayerVolume} volume={volume} width="100%" />
                <img src={fullScreenIconSvg} className='video-player-full-screen' onClick={toggleFullScreen} />
            </div>
        </div>
    )

    //TODO: check playIconSvg : pauseIconSvg
}