import React from 'react';
import style from './styles.css';
import img from './scc_img01.png';


const Start = (props) => {

    return (
        <div
        className="outter"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          padding: "0px 10vw",
          boxSizing: "border-box",
          maxWidth: "400px",
        }}
      >
 <div
        className="outter"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          padding: "0px 10vw",
          boxSizing: "border-box",
          maxWidth: "400px",
        }}
      >
                <img src={img} alt="" className="imgs"/>
                <h1 className="title">나는 <span className='names'>
                  {props.name}
                  </span>에 대해 얼마나 알고 있을까</h1>
                <input className="inputss" type="text" placeholder="내 이름" /><br/>
                <button className="butt">시작하기</button>
            </div>
            </div> 
    );
}

export default Start;