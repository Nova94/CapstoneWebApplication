import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img id="carImgOne" alt="CS"
                             src="./img/psuIcon.png"/>
                        <Carousel.Caption>
                            <h3>Img Title</h3>
                            <p>Students working</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="carImgTwo" alt="CAPSTONE"
                             src="/img/psuIcon.png"/>
                        <Carousel.Caption>
                            <h3>Img Title</h3>
                            <p>Img Caption</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>

                <h2>CS Capstone</h2>

                <p>
                Hello World
                </p>
            </div>
        );
    }
}