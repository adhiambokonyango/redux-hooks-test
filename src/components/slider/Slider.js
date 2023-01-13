import React, {Component} from 'react';

import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
const slideImages = [
    {
        url: require('./IMG_0605.jpg'),
        caption: 'Slide 1',

    },
    {
        url: require('./IMG_0074a.jpg'),
        caption: 'Slide 2'
    },
    {
        url: require('./IMG_0626.jpg'),
        caption: 'Slide 3'
    },
];
class Slider extends Component {
    render() {
        return (
            <div className="slide-container">
                <Slide>
                    {


                        slideImages.map((slideImage, index) =>(
                        <div className="each-slide" key={index}>
                        <div style={{'backgroundImage': `url(${slideImage.url})`, 'height':'84vh', 'backgroundRepeat':'no-repeat', 'backgroundSize':'cover'}}>
                        {/*<span>{slideImage.caption}</span>*/}
                        </div>
                        </div>
                        )

                    )
                    }
                </Slide>
            </div>

        );
    }
}
/* <img className="square" src={require('./img.png')} alt="hello" />*/
export default Slider;