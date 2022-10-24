import React, { useRef, useState } from "react";
import './slider.scss'

interface ISliderProps {
    images: string[],
    className?: string
}

const Slider = ({ images, className }: ISliderProps) => {
	const content = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState(0)
	let sliderWidth = 0;
	const sliderLength = images.length;

	const prevHandler = () => {
		if (content.current) {
            sliderWidth = content.current.clientWidth
            if(position === 0) {
                setPosition( -sliderWidth * (sliderLength - 1))
            } else {
                setPosition(prev => prev + sliderWidth)
            }
        }
	}

	const nextHandler = () => {
        if (content.current) {
            sliderWidth = content.current.clientWidth
            if (position <= (-sliderWidth * (sliderLength - 1))) {
                setPosition(0)
            } else {
                setPosition(prev => prev - sliderWidth)
            }
        }
	}

	return (
        <div className={`position-relative ${className} p-0`}>
            <button 
            className='arrow arrow-left'
            onClick={prevHandler}
            >
                <span className="arrow-line arrow-line-left"></span>
                <span className="arrow-line arrow-line-left"></span>
            </button>
            <div className='content' ref= {content}>
                {images.map((slide, i) => {
                    return (
                        <img 
                        src={slide}
                        style={{transform: `translateX(${position}px)`}}
                        className='slide'
                        key={i}
                        />
                    )
                })}
            </div>
            <button 
            className='arrow arrow-right'
            onClick={nextHandler}
            >
                <span className="arrow-line arrow-line-right"></span>
                <span className="arrow-line arrow-line-right"></span>
            </button>
        </div>
	);
};

export default Slider