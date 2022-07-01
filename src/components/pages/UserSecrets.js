import SimplePageLayout from '../templates/SimplePageLayout.js';
import {fetchuser, enableAccount, changeAccountRole} from  '../../service/AdminPanel/AdminPanel.js';
import {UserContext} from '../../auth/UserProvider.js';
import {useState, useContext, useEffect} from 'react';


import {Form, Button, Row, Col, Table, Modal} from 'react-bootstrap';
import {toContainHTML} from "@testing-library/jest-dom/dist/matchers";

const SecretsPanel = (props) => {
    const {user} = useContext(UserContext);
    const [listOfUsers, setUsers] = useState([]);
    useEffect(() => {
        console.log("Inside useEffect")
        fetchuser(user.jwt)
            .then(resp => {
                setUsers(resp)
            });


    }, [user]);

    const enableUser = (username) => {
        console.log("Enable User called with",username)
        enableAccount(username, user.jwt)
            .then(resp =>
                console.log("User enabled"))
    }


    const changeRole = (evt, secret) => {
        secret.password = "test"
    }
    let testListOfSecrets = [{name:"Netflix",date:"June 22d 2021",password:"supersecurepassword"}]
    const listOfUsersHTML = () => {
        if(testListOfSecrets.length){
            return testListOfSecrets.map((secret) => <tr><td>{secret.name}</td><td>{secret.date}</td><td>{secret.password}</td></tr>)
        }
    }



    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [newName, setNewName] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function getCurrentDate(separator='') {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`

    }

    const handleSubmit = (event) =>
        {

            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            if (form.checkValidity() === true) {
                event.preventDefault();
                event.stopPropagation();
                setShow(false)
                let newDate = getCurrentDate(" ")
                testListOfSecrets.push({name:newName,date:newDate,password:newPassword})

                setNewName("")
                setNewPassword("")

            }
            setValidated(true);
        }

    return(
        <SimplePageLayout>
            <Table id="secretTable">
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Creation Date</td>
                    <td>Password</td>
                    <td></td>
                    <td></td>
                </tr>
                </thead>
                <tbody id="secretTableBody">
                {listOfUsersHTML()}
                </tbody>
            </Table>
            <div className="d-flex">
                <button type="button" className="btn btn-success mx-1 my-1" onClick={handleShow} >Add</button>
                <button type="button" className="btn btn-primary mx-1 my-1">Save</button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a New Secret</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form  noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={newName} onChange={(e) => setNewName(e.target.value)} required type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required type="text" placeholder="Password" />
                        <Form.Text className="text-muted">
                            We'll never share your password with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button type="submit" variant="success" className="me-1 px-4">Add</Button>
                    <Button variant="danger" onClick={handleClose}>Cancel</Button>
                </Form></Modal.Body>
            </Modal>
        </SimplePageLayout>
    )
}
export default SecretsPanel;