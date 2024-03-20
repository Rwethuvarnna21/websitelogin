import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
export default function Topbar() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">LinkLounge</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink" onClick={handleHome}>Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to="/Profile">
        <img src="https://alchetron.com/cdn/peter-drury-9cb3990d-ed21-46a1-ad95-ec8e4d10aae-resize-750.jpeg" alt="" className="topbarImg"/>
        </Link>
      </div>
    </div>
  );
}
