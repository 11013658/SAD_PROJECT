import React, { Component } from 'react';
import './components/App.css';
import Header from './components/header';
import VerticalTabs from './components/sidetab';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }))
          .catch(err => err);
  }

  componentWillMount() {
      this.callAPI();
  }

  render(){
    return (
      <>
      <div className="App">
        <Header />
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
      <VerticalTabs />
      </>
      );
    }
}
export default App;