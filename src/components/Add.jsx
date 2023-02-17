import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import Guests from "./Guests";

const Add = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    let history = useNavigate();

    const handleData = (e) => {
        e.preventDefault();
        let lastElement = Guests.length + 1;

        if (name.trim() === "" || age.trim() == "") {
            alert("required both field");
        } else {
            Guests.push({id: lastElement, name: name, age: age});
            history('/');
        }
    };

    return ( 
        <>
            <div>
                <h2>Add</h2>
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
                    <Button onClick={(e) => handleData(e)} className="btn btn-info mt-4">Submit</Button>
                </Form>
            </div>
        </>
     );
}

export default Add;