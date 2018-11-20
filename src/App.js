import React, { Component } from 'react';
import './App.css';

class App extends Component {
  contentToSend() {
    let mailto = 'alan@trykiroku.com'
    let subject = 'Treatment options'
    let body = 'You gots some problems'
    let concatMailtoString =
      `mailto:${mailto}?subject=${subject}&body=${body}`
    return encodeURI(concatMailtoString)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href={this.contentToSend()}
            target="_blank"
            rel="noopener noreferrer"
          >
          send info to patient
          </a>
        </header>
      </div>
    );
  }
}

export default App;
