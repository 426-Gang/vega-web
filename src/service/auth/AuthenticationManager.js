import {doPost} from '../BaseAPI.js';

export function login(userInfo){
	console.log("Trying to log in at http://"+ process.env.REACT_APP_WEBSERVER_URL);
	console.log("In Auth", userInfo);
	return doPost(`http://${process.env.REACT_APP_WEBSERVER_URL}/api/login`, userInfo);
}
