import React from 'react';


const AFrame = () => {
    return (
        <a-scene>
            {/*ASSETS*/}
            <a-assets>
                <img crossOrigin="anonymous" id="test" src="https://c1.staticflickr.com/5/4261/35119351310_d1c9695937_b.jpg" />
                <img crossOrigin="anonymous" id="city" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg" />
                <img crossOrigin="anonymous" id="city-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg" />
                <img crossOrigin="anonymous" id="cubes" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg" />
                <img crossOrigin="anonymous" id="cubes-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg" />
                <img crossOrigin="anonymous" id="sechelt" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg" />
                <img crossOrigin="anonymous" id="sechelt-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-sechelt.jpg" />
                <script id="link" type="text/html">
                    <a-entity
                        src="#cubes-thumb"
                        scale="2 2 0"
                        geometry="primitive: plane"
                        material="src:${thumb}; side: double"
                        set-image="on: click; target: #image360; src: ${payload}"
                    />
                </script>
            </a-assets>
            {/*CAMERA*/}
            <a-camera>
                <a-cursor></a-cursor>
            </a-camera>
            {/*BODY*/}
            <a-entity id="links" layout="layout:line; margin: 2.8;" position="0 2 -4">
                <a-entity template="src: #link" data-payload="#city" data-thumb="#city-thumb" />
                <a-entity template="src: #link" data-payload="#cubes" data-thumb="#cubes-thumb" />
                <a-entity template="src: #link" data-payload="#sechelt" data-thumb="#sechelt-thumb" />
            </a-entity>
            <a-sphere radius="3000" material="side: double; src: #city" id="image360" />
            {/*END OF BODY*/}
        </a-scene>
    )
}

export default AFrame;