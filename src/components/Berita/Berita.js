import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../globalStyles';
import { BeritaSection,
         BeritaWrapper,
         BeritaSlide,
         BeritaSlider,
         BeritaImage,
         BeritaContent,
         Arrow,
         SliderButton,
         PrevArrow,
         NextArrow
} from './Berita.elements';

const Berita = ({ 
    slides,
    primary,
}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1));
        }

        timeout.current = setTimeout(nextSlide, 3000);

        return function () {
            if(timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [current, length]
    );

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <BeritaSection>
            <BeritaWrapper>
                {slides.map((slide, index) => {
                    return (
                        <BeritaSlide key={index}>
                            {index === current &&(
                                <BeritaSlider>
                                <BeritaImage src={slide.image} alt={slide.alt}/>
                                <BeritaContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <Link to={slide.path}>
                                        <Button big fontBig primary={primary}>
                                            {slide.label}
                                            <Arrow/>
                                        </Button>
                                    </Link>                                   
                                </BeritaContent>
                            </BeritaSlider>
                            )}                            
                        </BeritaSlide>
                    )
                })}
                <SliderButton>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButton>
            </BeritaWrapper>            
        </BeritaSection>
    )
}

export default Berita;
