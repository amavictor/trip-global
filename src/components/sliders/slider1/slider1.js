import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider1.scss"


import React, { Component } from "react";
import Slider from "react-slick";
import Package2 from "../../../assets/packages/handy-wicaksono-brizG9kR6qI-unsplash.jpg"
import Package3 from "../../../assets/packages/kazem-hussein-Kq1ERpkH0eQ-unsplash.jpg"
import Package4 from "../../../assets/packages/luke-minnaar-xwbCZN4S9oA-unsplash.jpg"

export default class AutoPlay extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 1000,
            cssEase: "linear",
            lazyLoad:true,
            arrows: false
        };


        return (
            <div className={"sliders"}>
                <Slider {...settings}>
                    <div>
                        <img src={Package2} alt={"package"}/>
                    </div>
                    <div>
                        <img src={Package3} alt={"package"}/>
                    </div>
                    <div>
                        <img src={Package4} alt={"package"}/>
                    </div>
                </Slider>
            </div>
        );
    }
}