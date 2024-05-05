import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line react/prop-types
function TrendsForYouRow({ title, postsNo }) {
    return (
        <div className='trends-for-you-row'>
            <div>
                <h3>{title}</h3>
                <p>{postsNo} posts</p>
            </div>
            <FontAwesomeIcon icon={faEllipsis} className='trends-icon'/>
        </div>
    )
}

export default TrendsForYouRow
