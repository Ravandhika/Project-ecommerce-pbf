import React from 'react';
import Laptop from './../../Assets/laptop.jpg';
import phone from './../../Assets/phones.jpg';
import './style.scss'
const Directory = props => {
    return(
        <div className="Directory">
            <div className="wrap">
                <div
                    className="item"
                    style={{
                    backgroundImage: `url(${Laptop})`
                    }}>
                        <a href="/">
                            Laptop
                        </a>
                </div>
                <div
                    className="item"
                    style={{
                    backgroundImage: `url(${phone})`
                    }}>
                        <a href="/">
                            Smartphones
                        </a>
                </div>
            </div>
            
        </div>
    )
}
export default Directory;