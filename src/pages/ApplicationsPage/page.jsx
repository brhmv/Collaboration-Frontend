import { Link, Outlet } from "react-router"
import AppealsPageNavbar from "@/features/ApplicationPageNavbar/container"
function ApplicationsPage() {

    return (
        <div>
            <AppealsPageNavbar />
            <Outlet />
        </div>
    )
}

export default ApplicationsPage
