// eslint-disable-next-line react/prop-types
function YouMightLikeRow({ src, title, text }) {
    return (
        <div className="you-might-like-row">
            <img src={src} />
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <button>Follow</button>
        </div>
    )
}

export default YouMightLikeRow
