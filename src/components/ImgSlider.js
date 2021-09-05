import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function ImgSlider() {
    let settings = {
        dots : true,
        infinite : true,
        speed : 500,
        slidesToShow : 1,
        slidesToScroll : 1,
        autoplay : true
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src='/images/slider-badag.jpg' />
            </Wrap>
            <Wrap>
                <img src='/images/slider-badging.jpg' />
            </Wrap>
            <Wrap>
                <img src='/images/slider-scales.jpg' />
            </Wrap>
            <Wrap>
                <img src='/images/slider-scale.jpg' />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider;

const Carousel = styled(Slider)`
    margin-top : 20px;
    & > button {
        opacity : 0;
        height: 100%;
        width:5vw;
        z-index : 1;
        &:hover {
            opacity : 1;
            transition : opacity 0.2s ease 0s;
        }
    }
    ul li button {
        &:before{
            font-size : 8px;
            color: rgb(158 , 158 , 171);
        }
    }
    li.slick-active button:before{
        color : white;
    }
    .slick-list {
        overflow : visible;
    }
    button {
        z-index : 1;
    }
    .slick-prev {
        left:-75px;
    }
    .slick-next {
        right:-75px;
    }
`
const Wrap = styled.div`
    cursor : pointer;
    img{
        border : 4px solid transparent;
        border-radius : 4px;
        width : 100%;
        height : 100%;
        box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -18px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration : 308ms;
        &:hover {
            border:4px solid rgba(249,249,249, 0.8);
        }

    }
`