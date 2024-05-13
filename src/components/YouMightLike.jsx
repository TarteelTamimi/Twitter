import YouMightLikeRow from "./YouMightLikeRow"

function YouMightLike() {
  return (
    <div className="you-might-know">
      <h2>You might like</h2>
      <YouMightLikeRow src="./public/tailwind.jpg" title="Tailwind CSS" text="@tailwindcss" />
      <YouMightLikeRow src="./public/typescript.jpg" title="TypeScript" text="@typescript" />
      <YouMightLikeRow src="./public/freecodecamp.jpg" title="FreeCodeCamp.org" text="@freecodecamp" />
      <button>Show more</button>
    </div>
  )
}

export default YouMightLike
