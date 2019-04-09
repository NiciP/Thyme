import React, { Component } from 'react'
import '../index.css';
import moment from 'moment-timezone';
import { Table } from 'semantic-ui-react'

class ViewTimeForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const timesheets = this.props.timesheets
		const items = [
			{
				name: "START TIME"
			},
			{
				name: "END TIME"
			},
			{
				name: "DURATION"
			},
			{
				name: "PROJECT"
			},
			{
				name: "ACTIVITY"
			},
			// {
			// 	name: "CUSTOMER"
			// },
		]

		return (
			<div className="viewDiv">
				<div>
					{items.map(item => {
						return (
							<div>
								<label className="itemTitle">{item.name}</label>
							</div>
						);
					})}
				</div>
				<div>
					{timesheets.map((item, index) => {
						return (

							<div key={index}>
								<Table>
									
									 <Table.Header>
										<Table.Row>
											<Table.Cell><label>{moment(item.begin).tz('Europe/Stockholm').format('YYYY-MM-DD HH:mm A')} </label></Table.Cell>
											</Table.Row>
											  </Table.Header>
												<Table.Body>
											<Table.Row>
											<Table.Cell><label>{moment(item.end).tz('Europe/Stockholm').format('YYYY-MM-DD HH:mm A')}  </label></Table.Cell>
											</Table.Row>
											<Table.Row><Table.Cell>{item.duration}</Table.Cell>
											</Table.Row>
											<Table.Row>
											<Table.Cell>{item.project}</Table.Cell>
											</Table.Row>
											<Table.Row>
											<Table.Cell>{item.activity}</Table.Cell>
											</Table.Row>
									</Table.Body>
								</Table>
							</div>

						);
					})}
				</div>
			</div>
		)
	}
}

export default ViewTimeForm;