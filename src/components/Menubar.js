import React, { Component } from "react";
import { Button, Grid, Menu, Sidebar, Segment } from "semantic-ui-react";
import { IoIosMenu, IoMdPerson, IoIosTimer, IoIosStats, IoIosDocument } from "react-icons/io";
import logo from "../image/image.png";
import SaveTimeRecording from "./SaveTimeRecording";
import ViewTimeRecording from "./ViewTimeRecording";

class Menubar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
	}
	handleHideClick = () => this.setState({ visible: false });
	handleShowClick = () => this.setState({ visible: true });
	handleSidebarHide = () => this.setState({ visible: false });

	render() {
		const { visible } = this.state;

		return (
			<Grid columns={2} style={{ background: "#354152" }}>
				<Grid.Column
					style={{ background: "#5bb695", width: "60px", height: "995px" }}
				>
					<Button
						id="menuicon"
						disabled={visible}
						onClick={this.handleShowClick}
						style={{ background: "#5bb695", padding: 0, marginLeft: 7 }}
					>
						<IoIosMenu size={30} />
					</Button>
				</Grid.Column>
				<Sidebar
					as={Menu}
					inverted
					onHide={() => {
						this.handleSidebarHide();
					}}
					vertical
					visible={visible}
					style={{
						background: "#46b395",
						width: "300px"
					}}
				>
					<div className="form">
						<img
							src={logo}
							alt="logo"
							style={{
								marginLeft: "10px",
								paddingTop: "20px",
								marginBottom: "45px",
								width: "260px",
								height: "140px"
							}}
						/>
					</div>
					<div
						style={{
							overflow: "hidden",
							marginBottom: "20px",
							marginLeft: "35px",
							color: "#354151"
						}}
					>
						<IoMdPerson
							size={20}
							style={{ marginRight: "10px", float: "left" }}
						/>
						<p
							id="login_message"
							style={{ color: "#354151", textAlign: "center", float: "left" }}
						>
							Welcome, {this.props.user.toUpperCase()}
						</p>
					</div>
					<Menu.Item
						className="item"
						as="a"
						style={{
							background: "#dbdbdf",
							marginBottom: "1px",
							height: "60px",
							marginLeft: "2%",
							width: "96%",
							verticalAlign: "middle",
							color: "#354151",
							fontSize: "20px"
						}}
					>
						<IoIosTimer
							size={30}
							style={{ paddingBottom: "3px", float: "left", marginLeft: "15px", marginRight: "15px" }}
						/>
						Activity Timer
					</Menu.Item>
					<Menu.Item
						as="a"
						style={{
							background: "#dbdbdf",
							marginBottom: "1px",
							height: "60px",
							marginLeft: "2%",
							width: "96%",
							color: "#354151",
							fontSize: "20px",
						}}
						>
						<IoIosStats
						size={30}
						style={{ paddingBottom: "3px", float: "left", marginLeft: "15px", marginRight: "15px" }}
					/>
						Dashboard
					</Menu.Item>
					<Menu.Item
						as="a"
						style={{
							background: "#dbdbdf",
							marginBottom: "1px",
							height: "60px",
							marginLeft: "2%",
							width: "96%",
							verticalAlign: "middle",
							color: "#354151",
							fontSize: "20px"
						}}
					>
						<IoIosDocument
							size={30}
							style={{ paddingBottom: "3px", float: "left", marginLeft: "15px", marginRight: "15px" }}
						/>
						Reports
					</Menu.Item>
				</Sidebar>
				<div>
					<Segment basic>
						<SaveTimeRecording />
					</Segment>
				</div>
				<div style={{ paddingTop: "70px" }}>
					<Segment basic>
						<ViewTimeRecording />
					</Segment>
				</div>
			</Grid>
		);
	}
}

export default Menubar;
