import SidebarRow from "./SidebarRow"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMagnifyingGlass, faMessage, faHouse, faListUl, faBookmark, faUsers, faUser, faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"

function Sidebar1() {
    return (
        <div className="sidebar1">
            <FontAwesomeIcon icon={faXTwitter} className="logo" />
            <SidebarRow icon={faHouse} text="Home" />
            <SidebarRow icon={faMagnifyingGlass} text="Explore" />
            <SidebarRow icon={faBell} text="Notifications" />
            <SidebarRow icon={faMessage} text="Messages" />
            <SidebarRow icon={faListUl} text="Lists" />
            <SidebarRow icon={faBookmark} text="Bookmarks" />
            <SidebarRow icon={faUsers} text="Communities" />
            <SidebarRow icon={faUser} text="Profile" />
            <SidebarRow icon={faEllipsis} text="More" />
            <button className="tweet-btn">Post</button>
        </div>
    )
}

export default Sidebar1
