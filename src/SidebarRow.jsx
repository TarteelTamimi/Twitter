import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// eslint-disable-next-line react/prop-types
function SidebarRow({ text, icon }) {
    return (
        <div className="sidebar-row">
            <FontAwesomeIcon icon={icon} className='sidebar-icons'/>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarRow
