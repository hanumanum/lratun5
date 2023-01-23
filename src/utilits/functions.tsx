import React, {MouseEvent} from 'react';


export const getDataJSON = async (url:string) => {
    const response = await fetch(url)
    return await response.json()
}

export const disableContextMenu = (e:MouseEvent<HTMLElement>)=> {
    //TODO: uncomment before deploy to touch screen kiosks
    //e.preventDefault()
}

