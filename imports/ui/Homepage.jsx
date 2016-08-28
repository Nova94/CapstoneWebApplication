import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

export default class Homepage extends Component {
    render() {
        return (
            <div style={{'width': 'auto', 'height': 'auto'}}>
                <h3>Home</h3>
                <center>
                    <Carousel style={{'width': '50%', 'height': '50%'}}>
                        <Carousel.Item>
                            <img id="PeytonLab" alt="Peyton Lab"
                                 width={900}
                                 height={500}
                                 src="http://capstone.unst.pdx.edu/sites/default/files/styles/pdx_collage_large/public/null/PeytonLab.jpg"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img id="URBN_Transit" alt="Urban Transit"
                                 width={900}
                                 height={500}
                                 src="http://capstone.unst.pdx.edu/sites/default/files/styles/pdx_collage_large/public/URBN_Transit.jpg"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img id="CellResearch" alt="CellResearch"
                                 width={900}
                                 height={500}
                                 src="http://capstone.unst.pdx.edu/sites/default/files/styles/pdx_collage_large/public/CellResearch.jpg"/>
                        </Carousel.Item>
                    </Carousel>
                </center>
            </div>
        );
    }
}