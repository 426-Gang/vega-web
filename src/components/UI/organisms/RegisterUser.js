import {Form, Button, Row, Col} from 'react-bootstrap';
import React, { useState } from 'react';

const RegisterUser = ({onSubmit}) => {
	
	const [username, setUsername]  = useState('');
	const [password, setPassword] = useState('');
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');

	const submitForm:function = (evt) => {
		evt.preventDefault();
		onSubmit({
			'username' : username,
			'password' : password,
			'firstname': firstname,
			'lastname' : lastname
		})
	}

	return (
		<Row>
      		<Col className="mx-auto" xs={6}>
        		<Form onSubmit={submitForm}>
					<Form.Group className="mb-3">
	        			<Form.Label>FIRSTNAME</Form.Label>
	        			<Form.Control type="text" onChange={e => setFirstname(e.target.value)}/>
	      			</Form.Group>
					  <Form.Group className="mb-3">
	        			<Form.Label>LASTNAME</Form.Label>
	        			<Form.Control type="text" onChange={e => setLastname(e.target.value)}/>
	      			</Form.Group>
	      			<Form.Group className="mb-3">
	        			<Form.Label>USERNAME</Form.Label>
	        			<Form.Control type="text" onChange={e => setUsername(e.target.value)}/>
	      			</Form.Group>
	      			<Form.Group className="mb-3">
	        			<Form.Label>PASSWORD</Form.Label>
	        			<Form.Control type="PASSWORD" onChange={e => setPassword(e.target.value)}/>
	      			</Form.Group>
	      			<Button variant="primary" type="submit" onClick={submitForm}>
	        			Register
	      			</Button>
    			</Form>
      		</Col>
   	 	</Row>
		);
}
export default RegisterUser;