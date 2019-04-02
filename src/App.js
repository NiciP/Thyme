import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  async getPing() {
    let apiUrl = "";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    if (process.env.NODE_ENV === "development") {
      apiUrl = proxyUrl + "http://demo.kimai.org/api/";
      console.log(process.env.NODE_ENV);
    } else {
      apiUrl = "https://demo.kimai.org/api/";
      console.log(process.env.NODE_ENV);
    }
    let headers = {
      "X-AUTH-USER": "susan_super",
      "X-AUTH-TOKEN": "api_kitten"
    };
    try {
      const response = await axios.get(apiUrl + "ping", {
        headers: headers
      });
      const ping = await response;
      console.log(ping);
      return ping;
    } catch (error) {
      console.error(error);
    }
  }

  async getTimesheets() {
    let apiUrl = "";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    if (process.env.NODE_ENV === "development") {
      apiUrl = proxyUrl + "http://demo.kimai.org/api/";
      console.log(process.env.NODE_ENV);
    } else {
      apiUrl = "https://demo.kimai.org/api/";
      console.log(process.env.NODE_ENV);
    }
    let headers = {
      "X-AUTH-USER": "susan_super",
      "X-AUTH-TOKEN": "api_kitten"
    };
    try {
      const response = await axios.get(apiUrl + "timesheets", {
        headers: headers
      });
      const times = await response;
      console.log(times);
      return times;
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <>
        <p>Click response you wanna get</p>
        <button onClick={() => this.getPing()}>ping</button>
        <button onClick={() => this.getTimesheets()}>timesheets</button>
      </>
    );
  }
}

export default App;
