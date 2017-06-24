import React from 'react';
import aframe from 'aframe';

const AFrame = () => {
    return (
        <a-scene>
            <a-camera>
                <a-cursor></a-cursor>
            </a-camera>
            <a-box
                handle-events
                scale="2 2 2"
                position="0 0 -5"
                material="color:green"
            />
            <a-text value="Daniel Slaby VR CV" color="white" position="0 2 -5" />
            <a-sky color="#2c2c2c" />
        </a-scene>
    )
}

export default AFrame;