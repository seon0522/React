import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Compon extends Component{
    static defaultProps = {
        name : '기본이름'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };

    render() {
        const {name, favoriteNumber, children} = this.props;
        return(
            <div>
                hello my name - {name}<br/>
                children - {children}<br/>
                favoriteNumber - {favoriteNumber}<br/>
                
            </div>
        );
    }
}

// Compon.defaultProps = {
//     name : '기본이름'
// }

// Compon.propTypes = {
//     name: PropTypes.string,
//     favor: PropTypes.number.isRequired
// }

export default Compon;