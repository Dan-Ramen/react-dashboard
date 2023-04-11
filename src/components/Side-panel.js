import MyImage from "./Dan.jpg"

function SidePanel() {
    return (
    <div className="wrapper">
        <div className="side-panel">
            <div className="profile">
                <img src={MyImage} alt="profile_picture" />
                <h3>Daniel Ramos</h3>
                <p>Entry Level SE</p>
            </div>
            <ul>
                <li>
                    <h3>Dashboard</h3>
                </li>
                <li>
                    <h3>Widget</h3>
                </li>
                <li>
                    <h3>Reviews</h3>
                </li>
                <li>
                    <h3>Customers</h3>
                </li>
                <li>
                    <h3>Online Analysis</h3>
                </li>
                <li>
                    <h3>Settings</h3>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default SidePanel;