import { Button, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Guests from "./Guests";

const Edit = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = Guests.map(e => {
        return e.id
    }).indexOf(id);

    const handleUpdate = (e) => {
        e.preventDefault();

        let guest = Guests[index];
        guest.name = name;
        guest.age = age;

        history('/');
    };

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
    }, [])

    return ( 
        <>
        <div>
            <h2>Edit</h2>
        </div>
        <div className="mb-5 mt-5">
            <Form className="d-grip">
                <div className="mb-1 mt-2">
                    <label className="mr-3" htmlFor="name">Name</label>
                    <input required type="text" name="name" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className="mb-1 mt-2">
                    <label className="ml-3 mr-3" htmlFor="age">Age</label>
                    <input required type="number" name="age" id="age" placeholder="Enter age" value={age} onChange={e => setAge(e.target.value)}/>
                </div>
                <Button onClick={(e) => handleUpdate(e)} className="btn btn-info mt-4">Update</Button>
            </Form>
        </div>
        <div>
            <Link to='/'>
                <Button>Back to Guest Book</Button>
            </Link>
        </div>
        </>
     );
}

export default Edit;