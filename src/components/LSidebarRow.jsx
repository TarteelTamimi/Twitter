import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// eslint-disable-next-line react/prop-types
function LSidebarRow({ text, icon }) {
    return (
        <div className="lsidebar-row">
            <FontAwesomeIcon icon={icon} className='lsidebar-icons'/>
            <h2>{text}</h2>
        </div>
    )
}

export default LSidebarRow
