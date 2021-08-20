import './App.css';
import { Component } from 'react';
import Start from './Start';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: "스파르타 코딩 클럽"
    };
  }

  render () {
    return (
    <div className="App">
      <Start name={this.state.name}/>
    </div>
    );
  }


}
export default App;
