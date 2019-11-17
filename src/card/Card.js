import React, { useState } from 'react'
import './Card.css'
import getImages from '../utils/getImages'
import { usePalette } from 'react-palette'
import { useSpring, animated } from 'react-spring'

export default function Card(props) {
    const [hov, setHov] = useState(false)
    const myImage = getImages(props.name) // incase they were not given to us in users
    const myAmount = parseInt(props ? props.info.amount.substr(1).replace(/,/g, '') : "0") // convert str to number for animation
    const { data } = usePalette(myImage) // grabs different colors from the image
    const myColor = props.name.includes('atrick') ? data.lightMuted : data.lightVibrant // Patricks lightVibrant was the exact same pink as his color
    // const myColor = 'white'
    const counter = useSpring({ number: (myAmount / 1000), from: { number: 0 }, config: { duration: 1500 } }) // animated counter
    const y = 20
    const delay = 300

    // animations below
    const amountStyle = useSpring({
        from: { opacity: 0, transform: `translateY(${y * .5}px)` },
        to: { opacity: 1, transform: `translateY(0px)` },
        delay: delay * .5,
    })
    const paymentsStyle = useSpring({
        from: { opacity: 0, transform: `translateY(${y * .8}px)` },
        to: { opacity: 1, transform: `translateY(0px)` },
        delay: delay * .8,
    })
    const creditsStyle = useSpring({
        from: { opacity: 0, transform: `translateY(${y * 1.3}px)` },
        to: { opacity: 1, transform: `translateY(0px)` },
        delay: delay * 1.3,
    })
    const imageStyle = useSpring({
        from: { opacity: 0, transform: 'scaleY(1.1) translateY(-40px)' },
        to: {
            opacity: 1,
            transform: 'scaleY(1) translateY(0px)',
            backgroundSize: hov ? "110%" : "100%"
        }
    })
    const nameStyle = useSpring({
        from: { opacity: 0, transform: `translateX(${y * -2.1}px)` }, // translateX 
        to: {
            opacity: 1,
            transform: hov ? `translateX(-25%)` : `translateX(0)`,
            background: hov ? 'rgba(255, 255, 255, .6)' : 'rgba(255, 255, 255, 0.8)'
        },
        delay: 0,
    })
    const hovStyle = useSpring({
        transformOrigin: '50% 50%',
        boxShadow: hov ? '0px 12px 48px rgba(0, 0, 0, 0.15)' : '0px 6px 24px rgba(0, 0, 0, 0.15)',
    })
    const cardInfoStyle = useSpring({
        background: hov ? `#${myColor}` : "white"
    })

    return (
        <div className='card-wrapper ' id='stagger-in' // animated from app.js
            onMouseOver={() => setHov(true)}
            onMouseLeave={() => setHov(false)}>
            <animated.div className='shadow' // sudo container for hov animation
                style={{ ...hovStyle, width: '100%', height: '100%' }} >
                <animated.div className='card-image'
                    style={{ ...imageStyle, backgroundImage: `url(${myImage})`, }} />
                <animated.div className='card-name'
                    style={nameStyle}>
                    <div className='card-name-top'>
                        {props.name}
                    </div>
                    <div className='card-name-bottom'>
                        {props.email}
                    </div>
                </animated.div>
                <animated.div className='card-info-wrapper'
                    style={cardInfoStyle} >
                    <animated.div className='info-box info-numbers'
                        style={{ ...amountStyle, color: props.color }}>
                        $
                        <animated.span className='info-numbers' // ANIMATED COUNTER
                            style={{ color: props.color }} >
                            {counter.number.interpolate(number => Math.floor(number))}
                        </animated.span>
                        <span className='info-numbers'
                            style={{ color: props.color }}>
                            ,000
                        </span>
                        <div className='info-label'>
                            amount
                        </div>
                    </animated.div>
                    <animated.div className='info-box'
                        style={paymentsStyle}>
                        <div className='info-numbers'
                            style={{ color: props.color }}>
                            {props.info.payments}
                        </div>
                        <div className='info-label'>
                            payments
                        </div>
                    </animated.div>
                    <animated.div className='info-box'
                        style={creditsStyle}>
                        <div className='info-numbers'
                            style={{ color: props.color }}>
                            {props.info.credits}
                        </div>
                        <div className='info-label'>
                            credits
                        </div>
                    </animated.div>
                </animated.div>
            </animated.div>
        </div>
    )
}
