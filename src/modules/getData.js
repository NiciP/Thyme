import axios from "axios";

const getTimesheets = async () => {
	const apiUrl = "https://demo.kimai.org/api/";
	const path = apiUrl + "timesheets";

	const user = JSON.parse(sessionStorage.current_user).username
	const password = JSON.parse(sessionStorage.current_user).password

	let headers = {
		"X-AUTH-USER": user,
		"X-AUTH-TOKEN": password,
	};
	try {
		const response = await axios.get(path, {
			headers: headers,
			mode: "cors"
		});
		return response;
	} catch (error) {
		return error;
	}
};

export { getTimesheets };
