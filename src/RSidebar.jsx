import Search from "./Search"
import YouMightLike from "./YouMightLike"
import TrendsForYou from "./TrendsForYou"

function RSidebar() {
  return (
    <div className="rsidebar">
        <Search />
        <YouMightLike />
        <TrendsForYou />
    </div>
  )
}

export default RSidebar
