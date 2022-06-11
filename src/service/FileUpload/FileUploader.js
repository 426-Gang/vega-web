import {doPostFile, doGet} from '../BaseAPI.js';

export function fileUploader(fileInfo, token){
	console.log("In File Uploader", token);
	return doPostFile(`http://${process.env.REACT_APP_WEBSERVER_URL}/api/venus/upload`, fileInfo, token);
}

export function fetchFiles(token){
	console.log("fetchFiles", token);
	return doGet(`http://${process.env.REACT_APP_WEBSERVER_URL}/api/venus/listfiles`, token)
}

export function fetchData(name, token){
	return doGet(`http://${process.env.REACT_APP_WEBSERVER_URL}/api/venus/fetchcontent?name=`+name, token)
}
