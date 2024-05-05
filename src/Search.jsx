import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Search() {
    return (
        <div className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
            <input type="text" placeholder="Search" />
        </div>
    )
}

export default Search
