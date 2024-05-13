import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faRepeat, faHeart, faChartSimple, faEllipsis } from "@fortawesome/free-solid-svg-icons"

function Activities() {
  return (
    <div className="activities">
      <div className="classes">
        <p className="active">Posts</p>
        <p>Replies</p>
        <p>Media</p>
        <p>Likes</p>
      </div>
      <div className="posts">
        <img src="./public/person.jpg" />
        <div>
          <p>danabramov.bsky.social <span>@dan_abramov . May 29</span></p>
          <p>happy 10th birthday to <span>@reactjs</span>!</p>
        </div>
        <FontAwesomeIcon icon={faEllipsis} className='post-icon'/>
      </div>
      <div className="post-activities">
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>46</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faRepeat} />
          <span>675</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faHeart} />
          <span>3,701</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faChartSimple} />
          <span>1.1M</span>
        </div>
      </div>
    </div>
  )
}

export default Activities
