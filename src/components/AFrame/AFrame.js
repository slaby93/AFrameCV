import React from 'react';
import aframe from 'aframe';

const AFrame = () => {
    return (
        <a-scene>
            <a-box scale="2 2 2" position="0 0 -5" material="color:green"/>
           <a-sky color="red"/>
        </a-scene>
    )
}

export default AFrame;