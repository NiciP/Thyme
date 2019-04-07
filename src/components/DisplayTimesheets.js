import React, { Component } from 'react';
// import { getData } from '../modules/saveTimeSheet';
import { getData } from "../modules/saveTimeSheet";

class DisplayTimesheets extends Component {

	state = {
		timesheets: null,
		begin: '',
		end: '',
		errorMessage: '',
	 data: false
	}

  componentDidMount() {
    this.postTimesheets()
  }

  async postTimesheets() {
    let response = await getData();
    this.setState({timesheets: response.data }
		)}


  render () {
    let fetchData;

    if (this.state.timesheets != null) {
      fetchData = (
        <div>
          {this.state.timesheets.map(item => {
            return <div key={item.id}>{item.data.message}</div>
          })}
        </div>
      )
    }

    return (
      <div>
        {fetchData}
      </div>
    )
  }
}
  export default DisplayTimesheets;