import TrendsForYouRow from "./TrendsForYouRow"

function TrendsForYou() {
  return (
    <div className="trends-for-you">
      <h2>Trends for you</h2>
      <TrendsForYouRow title="#GazaUnderAttack" postsNo="27.9K"/>
      <TrendsForYouRow title="#FreePalestine" postsNo="25.4K"/>
      <TrendsForYouRow title="#GAZA" postsNo="24.2K"/>
      <TrendsForYouRow title="Mine_Craft" postsNo="19.2K"/>
      <TrendsForYouRow title="#React_apps" postsNo="136,957"/>
      <button>Show more</button>
      <footer>
        <p> &copy;2023 X Crop.</p>
      </footer>
      
    </div>
  )
}

export default TrendsForYou
