import { Link, Outlet } from "react-router"
import AppealsPageNavbar from "@/features/ApplicationPageNavbar/container"


function AppealsPage() {

    return (
        <div>
            <AppealsPageNavbar />

            <Outlet />
        </div>
    )
}

export default AppealsPage
