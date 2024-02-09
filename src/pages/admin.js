import Sidebar from '../component/Admin-sidebar';
import '../style/Sidebar.scss';
function Admin(){
    return(

    <div className="admin_dashboard">
        <h1>Welcome to the admin dashboard</h1>
        <Sidebar />
    </div>
    )
}

export default Admin;