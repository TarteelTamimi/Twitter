import LSidebarRow from "./LSidebarRow"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMagnifyingGlass, faMessage, faHouse, faListUl, faBookmark, faUsers, faUser, faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"

function LSidebar() {
    return (
        <div className="lsidebar">
            <FontAwesomeIcon icon={faXTwitter} className="logo" />
            <LSidebarRow icon={faHouse} text="Home" />
            <LSidebarRow icon={faMagnifyingGlass} text="Explore" />
            <LSidebarRow icon={faBell} text="Notifications" />
            <LSidebarRow icon={faMessage} text="Messages" />
            <LSidebarRow icon={faListUl} text="Lists" />
            <LSidebarRow icon={faBookmark} text="Bookmarks" />
            <LSidebarRow icon={faUsers} text="Communities" />
            <LSidebarRow icon={faUser} text="Profile" />
            <LSidebarRow icon={faEllipsis} text="More" />
            <button className="tweet-btn">Post</button>
        </div>
    )
}

export default LSidebar
