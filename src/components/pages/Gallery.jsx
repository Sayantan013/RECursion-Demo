import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import React from 'react';
import Carousel from 'react-elastic-carousel';
import { CarouselItem } from './CarouselItem';

function Gallery() {
    const breakpoints = [
        {width: 1, itemsToShow = 1},
        {width: 500, itemsToShow = 2},
        {width: 768, itemsToShow = 3},
        {width: 1200, itemsToShow = 4}
    ];

    return (
        <div>
            <Carousel>
                <CarouselItem number ="1" />
                <CarouselItem number ="2" />
                <CarouselItem number ="3" />
                <CarouselItem number ="4" />
                <CarouselItem number ="5" />
                <CarouselItem number ="6" />
                <CarouselItem number ="7" />
                <CarouselItem number ="8" />
            </Carousel>
        </div>
    )
}

export default Gallery
