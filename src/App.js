import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

export default class ParentContainer extends Component{
  constructor(props){
    super(props);
    this.state = {message:"Hello World"};
  }
  render(){
    return(
      <Container display={this.state.message}/>
     // <div><p>{this.state.message}</p></div>
    );
  }
}

class Container extends Component{
  constructor(props){
    super(props);
    this.state = {displayText: props.display};
  }
  render(){
    return(
      <div>
        <p style={colorStyle}>{this.state.displayText}</p>
      </div>
    );
  }
}

var colorStyle = {
  color: "red"
}
