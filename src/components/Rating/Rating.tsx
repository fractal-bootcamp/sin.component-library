import { useState } from "react";
import "./rating.scss"


const Rating = () => {

    const [rating, setRating] = useState(0);
    const [fakeRating, setFakeRating] = useState(0);

    const [hoveredRating, setHoveredRating] = useState(0)

    const stars = document.querySelectorAll('.star');
    stars.forEach((star) => {
        let starVal = (Number(star.getAttribute('value')) + 1)
        star.addEventListener('mouseenter', function () {
            setFakeRating(starVal)
        })

        star.addEventListener('mouseleave', function () {
            stars.forEach(star => {
                star.classList.remove('hovered');
            });
            setFakeRating(rating)
        });

    })



    return <>
        <h1>hello rating</h1>
        {Array.from({ length: 5 }, (_, index) => {
            return <label className="thing" key={index} onClick={() => { setRating(index + 1) }}>
                <input
                    type="radio"
                    name="rating"
                />
                <span onMouseEnter={() => { setHoveredRating(index + 1) }} className={`star val${4}`} style={{
                    color:
                        index < rating ? 'yellow' : 'transparent'
                }} value={index} >
                    &#9733;
                </span>
            </label>
        })}

        {/* fake stars? */}
        <div>
            {Array.from({ length: 5 }, (_, index) => {
                return <label className="thing" key={index} onClick={() => { setRating(index + 1) }}>
                    <input
                        type="radio"
                        name="rating"
                    />
                    <span onMouseEnter={() => { setHoveredRating(index + 1) }} className={`star val${4}`} style={{
                        color:
                            index < fakeRating ? 'yellow' : 'transparent'
                    }} value={index} >
                        &#9733;
                    </span>
                </label>
            })}
        </div>

        rating {rating}
        hovered {hoveredRating}

    </>
}

export default Rating