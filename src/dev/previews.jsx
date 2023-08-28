import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {GifExpertApp} from "../GifExpertApp.jsx";
import {GifGrid} from "../components/GifGrid.jsx";
import {GifItem} from "../components/GifItem.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/GifExpertApp">
                <GifExpertApp/>
            </ComponentPreview>
            <ComponentPreview path="/GifGrid">
                <GifGrid/>
            </ComponentPreview>
            <ComponentPreview path="/GifItem">
                <GifItem/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews