import Nav from "./Nav"
import Profile from "./Profile"
import Activities from "./Activities"

function MainPage() {
  return (
    <div className="main-page">
        <Nav title="React" postsNo="2,611" />
        <Profile />
        <Activities />
    </div>
  )
}

export default MainPage

