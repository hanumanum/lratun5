import "./Sidebar.css";
import { useState } from 'react';
import { SliderContext } from '../../contexts/SliderContext';
import { useContext } from "react";

type slidersData = {
    sidebarData: any
}

export const Sidebar = (props: slidersData) => {
    const sidebarData = props.sidebarData

    const [activeHighlitedIndex, setActiveHighlitedIndex] = useState(0)
    const [isTopMenuSelected, setIsTopMenuSelected] = useState(true)
    const [activeNormallIndex, setActiveNormallIndex] = useState(0)
    const chooseHighlited = (e: React.MouseEvent<HTMLLIElement>) => {
        const indexStr = e.currentTarget.getAttribute("data-index")
        const index = (indexStr) ? parseInt(indexStr) : 0

        setActiveHighlitedIndex(index)
        const choosedSlider = sidebarData.highlitedMenuItems[index]
        setCurrentSlider(choosedSlider)
        setIsTopMenuSelected(true)
    }

    const { currentSlider, setCurrentSlider } = useContext(SliderContext)

    const choooseNormal = (e: React.MouseEvent<HTMLLIElement>) => {
        const indexStr = e.currentTarget.getAttribute("data-index")
        const index = (indexStr) ? parseInt(indexStr) : 0

        setActiveNormallIndex(index)
        const choosedSlider = sidebarData.normallMenuItems[index]
        setCurrentSlider(choosedSlider)
        setIsTopMenuSelected(false)
    }

    return (
        <div className="content-sidbar">
            <h1 className="content-sidbar-title">{sidebarData.title}</h1>
            <nav className="content-highlited-menu">
                {sidebarData.highlitedMenuItems?.map((v: any, i: number) => <li data-index={i} className={(i === activeHighlitedIndex && isTopMenuSelected) ? "active" : ""} onClick={chooseHighlited} key={"li" + i}>{v.title}</li>)}
            </nav>
            <nav className="content-normal-menu">
                {sidebarData.normallMenuItems?.map((v: any, i: number) => <li data-index={i} className={(i === activeNormallIndex && !isTopMenuSelected) ? "active" : ""} onClick={choooseNormal} key={"lii" + i}>{v.title}</li>)}
            </nav>
        </div>
    )
}