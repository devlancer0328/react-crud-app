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

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
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
                                        {e.name}
                                    </td>
                                    <td>
                                        {e.age}
                                    </td>
                                    <td>
                                        <Link to='/edit'>
                                            <Button>Edit</Button>
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
        </div> 
    )
}

export default Home;