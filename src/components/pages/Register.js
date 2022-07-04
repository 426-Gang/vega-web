import {useState, useContext} from 'react';
import UserRegistrationPageLayout from '../templates/UserRegistrationPageLayout.js';
import RegisterUser from '../UI/organisms/RegisterUser.js';
import {register} from '../../service/auth/RegisterManager.js';

import {UserContext} from '../../auth/UserProvider.js';
import  { Redirect } from 'react-router-dom'

const Register = (props) => {
	
	const { context } = props; 
	const {user, setUserInfo,logout} = useContext(UserContext);
	const [auth, setAuth] = useState(false);
	console.log("Userinfo", user);
	function onSubmit(userInfo){
		register(userInfo)
			.then(res => {
				console.log("Response", res);
			})
	}

		if(!auth){
			return (
				<UserRegistrationPageLayout>
					<RegisterUser onSubmit={onSubmit}/>
				</UserRegistrationPageLayout>
			);
		} else {
			return <Redirect to='/' />;
		}
}

export default Register;