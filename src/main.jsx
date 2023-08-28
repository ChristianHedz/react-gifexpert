import React from 'react'
import ReactDOM from 'react-dom/client'
import {GifExpertApp} from "./GifExpertApp.jsx";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";
import "./styles.css";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}>
            <GifExpertApp/>
        </DevSupport>
    </React.StrictMode>,
)
