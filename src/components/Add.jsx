import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const Add = () => {

    const handleData = (e) => {
        e.preventDefault();
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
                        <input required type="text" name="name" id="name" placeholder="Enter name"/>
                    </div>
                    <div className="mb-1 mt-2">
                        <label className="ml-3 mr-3" htmlFor="age">Age</label>
                        <input required type="number" name="age" id="age" placeholder="Enter age"/>
                    </div>
                    <input className="btn btn-info mt-4" type="submit" value="Add a new data" />
                </Form>
            </div>
            <div>
                <Link to='/'>
                    <Button onClick={() => handleData()}>Back to Guest Book</Button>
                </Link>
            </div>
        </>
     );
}

export default Add;