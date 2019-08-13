import styled from 'styled-components'
import React, { useState } from 'react'
import randomColor from 'randomcolor'
import ReactInterval from "react-interval";

const Container = styled.div`
width: 1000px;
height: 1000px;
position: relative;
`

const Dot = styled.div`
border-radius: 50%;
position: absolute;
background-color: ${({ color }) => color}
top: ${({ position }) => position.top}px;
left: ${({ position }) => position.left}px;
width: ${({ diameter }) => diameter}px;
height: ${({ diameter }) => diameter}px;
transition: all 2s;
`

const Dots = () => {
    const numberOfDots = 30
    const [colors, setColors] = useState(Array(numberOfDots).fill(randomColor()))

    const randomizeColors = () => setColors((Array(numberOfDots).fill(randomColor())))

    return (
        <Container>
            {colors.map((color, index) => <Dot key={index} color={color}
                position={{ top: Math.random() * 1000, left: Math.random() * 1000 }} diameter={Math.random() * 200} />)}
            <ReactInterval
                timeout={500}
                enabled
                callback={randomizeColors}
            />
        </Container>
    )
}

export default Dots