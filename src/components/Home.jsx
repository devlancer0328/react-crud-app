import React from "react";
import { Table, Button } from "react-bootstrap";
import Guests from "./Guests";

const Home = () => {
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
                                        <Button onClick={() => alert(e.id)}>Edit</Button>
                                        &nbsp;
                                        <Button className="btn btn-danger" onClick={() => alert(e.id)}>Delete</Button>
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