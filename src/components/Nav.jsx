import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line react/prop-types
function Nav({title, postsNo}) {
  return (
    <div className='nav'>
        <FontAwesomeIcon icon={faArrowLeft} className='nav-icon'/>
        <div>
            <h3>{title}</h3>
            <p>{postsNo} posts</p>
        </div>
    </div>
  )
}

export default Nav
