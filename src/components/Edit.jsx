import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Edit = () => {
    return ( 
        <>
        <div>
            <h2>Edit</h2>
        </div>
        <div className="mb-5 mt-5">
            Empty
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