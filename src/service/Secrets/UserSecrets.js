import {doPost} from '../BaseAPI.js';

export function newSecret(username,data,shared){
	return doPost(`http://${process.env.REACT_APP_WEBSERVER_URL}/api/venus/vault/newentry?username=`+username+'&data='+data+'&shared='+shared)
}

export function mySecrets(username){
	return doPost(`http://${process.env.REACT_APP_WEBSERVER_URL}/api/venus/vault/mysecrets?username=`+username)
}

export function updateSecret(id,username,data,shared){
	return doPost(`http://${process.env.REACT_APP_WEBSERVER_URL}/api/venus/vault/updatesecret?id=`+id+'&username='+username+'&data='+data+'&shared='+shared)
}

export function deleteSecret(id){
	return doPost(`http://${process.env.REACT_APP_WEBSERVER_URL}/api/venus/vault/deletesecret?id=`+id)
}