// 리액트 패키지를 불러옵니다.
import React from 'react'; 
import styled from 'styled-components';

// js 함수가 값을 받아오는 것과 똑같이 받아오네요.
const BucketList = (props) => {
    
    const my_lists = props.list;

    console.log(props);
  
    return (
        <ListStyle>
            {
                my_lists.map((list, index) => {
                    
                    console.log(list);
                    return (
                        <ItemStyled key={index}>
                          {list}
                        </ItemStyled>
                    );
                })
            }
        </ListStyle>
    );
}

const ListStyle = styled.div`
border-radius: 6px;
border: 1px dotted #ddd;
display: flex;
flex-direction: column;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
`;

const ItemStyled = styled.div`
padding: 16px;
margin: 8px;
background-color: aliceblue;
border-radius: 10px;
`;


export default BucketList;