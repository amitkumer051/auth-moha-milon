import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const RootCompo = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default RootCompo;