import logo from './logo.svg';
import './App.css';
import React from "react";

import Start from "./Start";
import Quiz from "./Quiz";
import Score from "./Score";

class App extends React.Component{
  constructor(props){
    super(props);
// state에 필요한 데이터를 넣어줘요!
    this.state = {
      name: "스파르타 코딩 클럽",
      page: "start",
        scoreMsg: "이 정도면 아주 친한 친구 사이! 앞으로도 더 친하게 지내요! :)",
        list : [{question: "나는 리액트를 쓸것이다.", answer:"O"},
        {question: "나는 코딩을 해봤다..", answer:"O"},
        {question: "나는 리액트를 쓸것이다.", answer:"O"},
        {question: "취업상담을 했다..", answer:"o"},
        {question: "힘들다", answer:"x"}],
        ranking:[{rank:1, name: "dd", message:"안녕"}
        ,{rank:2, name: "dㅇㄹ", message:"안녕ㄴ"}
        ,{rank:3, name: "dㄴㅇ", message:"안녕ㅇ"}
        ,{rank:4, name: "dㄹ", message:"안녕ㄹ"}
        ],
    };
  } 
  
  render () {
    return (
      <div className="App">
        {/* 조건부 랜더링을 합니다 / state의 page를 바꿔가면서 확인해봐요! */}
        {this.state.page === "quiz" && (<Quiz list={this.state.list} />)}
        {this.state.page === "start" && (<Start name={this.state.name} />)}
        {this.state.page === "score" && (<Score name={this.state.name} scoreMsg={this.state.scoreMsg}/>)}
      </div>
    );
  }

}

export default App;