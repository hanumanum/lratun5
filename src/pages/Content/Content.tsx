import "./Content.css";
import { useParams } from "react-router-dom";
import { Navigate } from "../../components/Navigate/Navigate";
import { useState, useEffect } from 'react';
import { getDataJSON, disableContextMenu } from '../../utilits/functions';
import { Slider } from '../../components/Slider/Slider';
import { SliderContext } from '../../contexts/SliderContext';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export const Content = () => {
    const params = useParams()
    const slug = params.contentslug
    const [isFullScreen, setIsFullScreen] = useState(false)

    const [data, setData] = useState({} as any);
    const [currentSlider, setCurrentSlider] = useState({})

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen)
    }

    const feachDataAsync = async () => {
        const data = await getDataJSON(`/data/${slug}.json`)
        setData(data);
        setCurrentSlider(data.highlitedMenuItems[0])
    };

    useEffect(() => {
        feachDataAsync();
        return () => { };
    }, []);

    return (
        <SliderContext.Provider value={{ currentSlider, setCurrentSlider }}>
            {!isFullScreen && <Navigate />}
            <div className="holder" onContextMenu={disableContextMenu}>
                <div className={`contenet ${(isFullScreen) ? "contenet-full-screened" : ""}`}>

                    <Slider slidesData={currentSlider} fullScreenData={{ isFullScreen, toggleFullScreen }} />
                    <div style={{ display: (isFullScreen) ? "none" : "block" }}>
                        <Sidebar sidebarData={data} />
                    </div>
                </div>
            </div>
        </SliderContext.Provider>
    )
};
