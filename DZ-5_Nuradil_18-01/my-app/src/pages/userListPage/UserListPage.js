import React from 'react';
import {Table} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {fetchExodusUserAction} from "../../redux/action";


function UserListPage(props) {
    const dispatch = useDispatch()

    const getUsers = (event) => {
        dispatch(fetchExodusUserAction(event.target.value))
    }

        return (
            <div>
                <h1 className="b-5">Users list</h1>
                    <button variant="success" onClick={getUsers} className="my-5" >get users</button>
                {/*без него уходит ы цикл*/} <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>email</th>
                </tr>
                </thead>
                <tbody>
                    {users.map(user => <tr>
                        <td>{user.id}</td> <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td></tr> )}
                </tbody>
                </Table>
            </div>
        );
}

export default UserListPage;