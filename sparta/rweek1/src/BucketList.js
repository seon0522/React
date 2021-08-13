// 리액트 패키지를 불러옵니다.
import React from 'react'; 

// js 함수가 값을 받아오는 것과 똑같이 받아오네요.
const BucketList = (props) => {
    
    const my_lists = props.list;

    console.log(props);
  
    return (
        <div className="lists">
            {
                my_lists.map((list, index) => {
                    
                    console.log(list);
                    return (<div className="list-item" key={index}>{list}</div>);
                })
            }
        </div>
    );
}

export default BucketList;