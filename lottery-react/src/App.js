import "./App.css";
import React from "react";
import web3 from './web3';
 
class App extends React.Component {
  render() {
    console.log(web3.version)
    web3.eth.getAccounts().then(console.log);
    return (
      <div className="App">
        <header className="App-header">
          
          Lottery React
         
        </header>
      </div>
    );
  }
}
export default App;