import {doPost} from '../BaseAPI.js';

export function login(userInfo){
	console.log("In Auth", userInfo);
	return doPost(`http://${process.env.WEBSERVER_URL}/api/login`, userInfo);
}
