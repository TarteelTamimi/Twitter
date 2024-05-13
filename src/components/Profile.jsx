import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faBell, faLink, faCalendarDays } from "@fortawesome/free-solid-svg-icons"

function Profile() {
    return (
        <div className="profile">
            <img src="./public/react-background.png" className="react-background-img" />
            <img src="./public/react.jpg" className="react-img" />
            <div className='follow'>
                <FontAwesomeIcon icon={faEllipsis} className='follow-icons' />
                <FontAwesomeIcon icon={faBell} className='follow-icons' />
                <p>Following</p>
            </div>
            <div className='profile-content'>
                <h2>React</h2>
                <h4>@reactjs</h4>
                <p>The library for web and native user interfaces</p>
                <div className='date'>
                    <FontAwesomeIcon icon={faLink} />
                    <a href="#">react.dev</a>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <p>Joined July 2013</p>
                </div>
                <pre className='following-er'><span className='no'>267</span> Following        <span className='no'>708.1K</span> Followers</pre>
            </div>
        </div>
    )
}

export default Profile
