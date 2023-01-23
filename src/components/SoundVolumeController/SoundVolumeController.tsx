import "./SoundVolumeController.css"
import {useRef, useEffect, useState} from 'react';

export type SoundVolumeControllerProps = {
    width: number | string
    volume: number
    setVolume: (vol: number) => void
}

export const SoundVolumeController = (props: SoundVolumeControllerProps) => {

    const { volume, setVolume, width } = props
    const soundRef = useRef({} as HTMLDivElement)
    const [volumeBar, setVolumeBar] = useState(volume)

    useEffect(() => {
        soundRef.current.onclick = (e: MouseEvent) => {
            const volume = (e.offsetX / soundRef.current.offsetWidth)
            setVolumeBar(volume)
            setVolume(volume)
        }
    }, [])

    return (<div className='sound-holder'>
        <div className='sound-icon'></div>
        <div ref={soundRef} style={{ width: width }} className='sound-progress-bar'>
            <div style={{ width: `${volumeBar * 100}%` }} />
        </div>
    </div>)
}