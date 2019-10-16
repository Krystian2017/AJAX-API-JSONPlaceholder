import React, { Component } from "react";

import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     users: []
  //   }
  //   this.requestData()
  // }

  state = {
    users: []
  };

  componentDidMount() {
    // this.requestData()
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

    // xhr.onload = () => {
    //   console.log(xhr.status);
    //   if (xhr.status === 200) {
    //     const users = JSON.parse(xhr.response)
    //     console.log(users);
    //     this.setState({ users })
    //   }
    //   // console.log(typeof xhr.response);
    // }

    xhr.addEventListener("load", () => {
      console.log(xhr.status);
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        console.log(users);
        this.setState({ users });
      }
    });

    xhr.send(null);
  }

  // requestData() {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

  //   xhr.onload = () => {
  //     console.log(xhr.status);
  //     if (xhr.status === 200) {
  //       const users = JSON.parse(xhr.response)
  //       console.log(users);
  //       this.setState({ users })
  //     }
  //     // console.log(typeof xhr.response);
  //   }
  //   xhr.send(null)
  // }

  render() {
    const users = this.state.users.map(user => (
      <div key={user.id}>
        <h4>{user.name}</h4>
        <p>{user.address.city}</p>
      </div>
    ));
    return (
      <div className="App">
        <div>
          <h1 className="App-header">AJAX REST API</h1>
          <p className="App-description">
            Task to practise REST API and XMLHttpRequest - I used create-app and
            AJAX to load file from{" "}
            <a className="App-link" href="https://jsonplaceholder.typicode.com">
              JSONPlaceholder
            </a>
            . You can find the code on{" "}
            <a
              className="App-link"
              href="https://github.com/Krystian2017/AJAX-API-JSONPlaceholder"
            >
              my GitHub account.
            </a>
          </p>
        </div>
        <div>{users}</div>
      </div>
    );
  }
}

export default App;
