import { Link } from "react-router-dom";
import { Astronaut } from "../components/Astronaut";

export const Home = () => {
    return (
        <>
            <h1>Magnetic Ressonation</h1>
            <Astronaut id={0} text="Do you know what is Magnetic Reconnection?"></Astronaut>
            <div>
                <span>Choose an option</span>
                <Link className="btn btn-outline-light" to="/content-yes">YES</Link> 
                <Link className="btn btn-outline-light" to="/content-no">NO</Link> 
            </div>
        </>
    )
}