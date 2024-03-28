
import { Outlet } from "react-router-dom";
import { NavbarSimple } from "../pages/shared/navbar/NavbarSimple";


const Root = () => {
    return (
        <main>
           <NavbarSimple/>
            <Outlet/>
        </main>
    );
};

export default Root;