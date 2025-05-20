import "./dashboard.css";
import Header from "../../components/navigation/Header";
import SideBar from "../../components/navigation/SideBar";

function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <div className="Dashboard">
      <div className="Dashboard-header">
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      </div>
      <div className="Dashboard-side-bar">
        <SideBar  />
      </div>
    </div>
  );
}

export default Dashboard;