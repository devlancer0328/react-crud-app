import React from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Guests from "./Guests";

const Home = () => {

    let history = useNavigate();

    const handleDelete = id => {
        const index = Guests.map(e => {
            return e.id;
        }).indexOf(id);
        Guests.splice(index,1);
        history('/');
    }

    const handleEdit = (id, name, age) => {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
    }

    return (
        <div>
            <h2 className="mb-4">Guest Book</h2>
            <h5 className="mb-4 pt-4 border-top">Guest number: {Guests.length}</h5>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Guests && Guests.length > 0
                        ?
                        Guests.map(e => {
                            return (
                                <tr>
                                    <td>
                                        {e.id}
                                    </td>
                                    <td>
                                        {e.name}
                                    </td>
                                    <td>
                                        {e.age}
                                    </td>
                                    <td>
                                        <Link to='/edit'>
                                            <Button onClick={() => handleEdit(e.id, e.name, e.age)}>Edit</Button>
                                        </Link>
                                        &nbsp;
                                        <Button className="btn btn-danger" onClick={() => handleDelete(e.id)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No data"
                    }
                </tbody>
            </Table>
            <div className="btn_container">
                <Link to='/add'>
                    <Button className="btn btn-info w-25 mt-2">Add a new data</Button>
                </Link>
            </div>
        </div> 
    )
}

export default Home;