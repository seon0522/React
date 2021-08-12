import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, favoriteNumber, children}) => {

    return <div>너의 이름은!! {name}<br/>
    children 같은 {children} <br/>
    숫자 {favoriteNumber}
    </div>

};

// 근데 부모가 값을 주지 않는다면 내가!
MyComponent.defaultProps = {
    name : '기본이름'
};

// 경로를 출력
MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired

}

export default MyComponent;                                                