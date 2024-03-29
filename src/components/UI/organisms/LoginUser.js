import {Form, Button, Row, Col} from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginUser = ({onSubmit}) => {
	
	const [username, setUsername]  = useState('');
	const [password, setPassword] = useState('');

	const submitForm:function = (evt) => {
		evt.preventDefault();
		onSubmit({
			'username' : username,
			'password' : password
		})
	}

	return (
		<Row>
      		<Col className="mx-auto" xs={6}>
        		<Form onSubmit={submitForm}>
	      			<Form.Group className="mb-3">
	        			<Form.Label>USERNAME</Form.Label>
	        			<Form.Control type="text" onChange={e => setUsername(e.target.value)}/>
	      			</Form.Group>
	      			<Form.Group className="mb-3">
	        			<Form.Label>PASSWORD</Form.Label>
	        			<Form.Control type="PASSWORD" onChange={e => setPassword(e.target.value)}/>
	      			</Form.Group>
	      			<Button variant="primary" type="submit" onClick={submitForm}>
	        			Submit
	      			</Button>
    			</Form>
				<Link to='/register'>Need an account? Go ahead and register for one here.</Link>
      		</Col>
   	 	</Row>
		);
}
export default LoginUser;