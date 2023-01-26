import React from "react";
import { Table } from "react-bootstrap";
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