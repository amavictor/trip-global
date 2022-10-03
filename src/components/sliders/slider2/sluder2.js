import React, { Component } from "react";
import Slider from "react-slick";
import "./slider2.scss"

export default class SimpleSlider extends Component {


    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings} className={"slide"}>
                    <div className={"carousel"}>
                        <p>"Throughout the years we have had the opportunity of working with Trip Global investment Ltd
                            and we have establish a strong business relationship with them. We are very proud to have
                            them as our business partner."
                        </p>
                        <i>...Royale Palace Hotels</i>

                    </div>
                    <div className={"carousel"}>
                        <p>"Trip Global Investment limited is on of the best courier services I have used. Their proccess
                            are really smooth."
                        </p>

                        <i>...Keneth Ugwu</i>
                    </div>
                    <div className={"carousel"}>
                        <p>"Trip Global will always be my goto service for transportation. I love them."</p>
                        <i>...Adeyemi Adesanya</i>
                    </div>
                    <div className={"carousel"}>
                        <p>"It's their timing for me. They deliver really fast. I love that a lot."</p>
                        <i>...Grace Mercy</i>
                    </div>

                </Slider>
            </div>
        );
    }
};