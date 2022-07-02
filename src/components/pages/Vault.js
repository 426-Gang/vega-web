import {useState, useContext, useEffect} from 'react';
import SimplePageLayout from '../templates/SimplePageLayout.js';
import {Form, Button, Row, Col} from 'react-bootstrap';
import { newSecret, mySecrets} from '../../service/Secrets/VaultManager';
import {UserContext} from '../../auth/UserProvider.js';

const Vault = (props) => {	
	
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
	const {user} = useContext(UserContext);
	const [listOfSecrets, setSecrets] = useState([]);
	const [dataLoaded, setDataLoaded] = useState(false);
	const [content, setContent] = useState('');
	var uploadHTML;
	useEffect(() => {
		console.log("JWT is",user.jwt, dataLoaded)
			console.log("Inside useEffect")
			// mySecrets(user.jwt)
			// 	.then(resp => {
			// 		setDataLoaded(true);
			// 		setSecrets(resp)});
		

	}, [user])

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();
		formData.append("file", selectedFile);
		newSecret(user.jwt,formData, false)
			.then(res => {
				console.log("Response", res);
			})

	}

	const mySecrets = (name) => {
		console.log(user.jwt)
		mySecrets(user.jwt)
			.then(res => {
				setContent(res);
			})
	}

	// const listOfFilesHTML = () => {
	// 	if(listOfSecrets.length){
	// 		return listOfSecrets.map((file) => <li onClick={() => fetchFileData(file)} style={{"cursor":"pointer"}}><a href="#">{file}</a></li>)
	// 	}

	// }


		uploadHTML = (<Row>
				<Col className="mx-auto" xs={6}>
					<Form.Group controlId="formFile" className="mb-3">
    					<Form.Label>Add Secret</Form.Label>
    					<Form.Control type="secret" onChange={changeHandler} />
 					</Form.Group>
 					<Button variant="primary" type="submit" onClick={handleSubmission}>
    					Submit
  					</Button>
 				</Col>
			</Row>);
	

	return (
		<SimplePageLayout>
			
			{uploadHTML}
			<Row mt="5">
				<Col sm={6}>
					<ul style={{"list-style-type":"none"}}>{}</ul>
				</Col>
			</Row>
			<Row>
				<Col>
					{content}
				</Col>
			</Row>
		</SimplePageLayout>
		);
}

export default Vault;