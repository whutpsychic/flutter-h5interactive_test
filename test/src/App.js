import React from 'react';
import './App.css';
import { Button } from 'antd';
import fc from "./flutter-core";

class App extends React.Component {

  state = {
    text: ""
  }

  componentDidMount() {
    fc.traceback("componentDidMount")
    fc.register("onScaned", (result) => {
      this.setState({
        text: result
      })
    })
  }

  render() {
    return (
      <ul className='ul'>
        <li><Button type="primary" onClick={this.onClickBtn1} >Primary Button</Button></li>
        <li><Button type="primary" onClick={this.onClickBtn2} >Primary Button</Button></li>
        <li><Button type="primary" onClick={this.onClickBtn3} >{this.state.text}</Button></li>
      </ul>
    );
  }

  onClickBtn1() {
    console.log("onClickBtn1")
    fc.traceback("ipconfig")
  }

  onClickBtn2() {
    console.log("onClickBtn2")
    fc.traceback("scan")
  }

  onClickBtn3() {
    console.log("onClickBtn3")
    fc.traceback("componentDidMount")
  }

}

export default App;
