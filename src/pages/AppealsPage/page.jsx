import { Link, Outlet } from "react-router"
import AppealsPageNavbar from "../../features/AppealsPageNavbar/container"


function AppealsPage() {

    return (
        <div>
            <AppealsPageNavbar />

            <Outlet />
        </div>
    )
}

export default AppealsPage
