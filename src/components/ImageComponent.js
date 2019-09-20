import React, { useState, useEffect} from 'react';



const ImageComponent = (props) => {

    const [colors, setColors] = useState('');
    useEffect(
    function colorchanger() {
        let c = [
        "#FFBAAA",
        "#27576B",
        "#D47F6A",
        "#AA7539",
        "#003D19",
        "#6E91A1",
        "#552D00"
    ];
    let dc = c[Math.floor(Math.random() * c.length)];
    
    setColors(dc);
}, []);

function handleMouseOver(e) {
    let c = [
        "#FFBAAA",
        "#27576B",
        "#D47F6A",
        "#AA7539",
        "#003D19",
        "#6E91A1",
        "#552D00"
    ];
    let dc = c[Math.floor(Math.random() * c.length)];
    e.target.style.backgroundColor = dc;
}

    return <div onMouseOver={handleMouseOver} style={{backgroundColor: `${colors}`}}>
                <img src={props.url} />
            </div>
}

export default ImageComponent;