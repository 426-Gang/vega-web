import {useState, useContext} from 'react';
import UserRegistrationPageLayout from '../templates/UserRegistrationPageLayout.js';
import RegisterUser from '../UI/organisms/RegisterUser.js';
import {register} from '../../service/auth/RegisterManager.js';
import {Row, Col} from 'react-bootstrap';

import {UserContext} from '../../auth/UserProvider.js';
import { Link } from 'react-router-dom';

const Register = (props) => {
	
	const {user} = useContext(UserContext);
	const [regs, setRegs] = useState(false);
	console.log("Userinfo", user);
	function onSubmit(userInfo){
		register(userInfo)
			.then(res => {
				console.log("Response", res);
				setRegs(true);
			})
	}

		if(!regs){
			return (
				<UserRegistrationPageLayout>
					<RegisterUser onSubmit={onSubmit}/>
				</UserRegistrationPageLayout>
			);
		} else {
			return (
				<UserRegistrationPageLayout>
					<Row>
						<Col>
							Thanks for registering, you are in a deactivated state. Your admin will activate you.
						</Col>
					</Row>
				</UserRegistrationPageLayout>
			);
		}
}

export default Register;