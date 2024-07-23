import { useState } from "react";
import "./rating.scss"; // Assuming you have a Sass file for styling


export interface RatingProps {
    totalStars: number;
    shape?: string;
    disabled?: boolean
    readOnly?: boolean;
    readOnlyValue?: number
}

const Rating: React.FC<RatingProps> = ({
    totalStars,
    shape = '\u2605',
    disabled = false,
    readOnly = false,
    readOnlyValue = 5
}) => {
    const defaultRating = readOnly ? readOnlyValue : 0;

    const numberOfStars = totalStars
    const [rating, setRating] = useState(defaultRating);
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleStarClick = () => {
        if (!disabled && !readOnly) {
            setRating(hoveredRating);

        }
    };

    const handleStarHover = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
        if (!disabled && !readOnly) {
            const starWidth = (e.target as HTMLSpanElement).offsetWidth;
            const mouseX = e.clientX - (e.target as HTMLSpanElement).getBoundingClientRect().left;
            const hoverWidth = (mouseX / starWidth) * 100;

            // Round hoverWidth to nearest 10 for more predictable behavior
            const roundedHoverWidth = Math.round(hoverWidth / 10) * 10;
            // Determine hoveredRating based on hoverWidth
            if (roundedHoverWidth < 25) {
                setHoveredRating(index + 0.5);
            } else if (roundedHoverWidth >= 25 && roundedHoverWidth < 75) {
                setHoveredRating(index + 1);
            } else {
                setHoveredRating(index + 1.5);
            }
        }
    };
    const handleStarLeave = () => {
        if (!disabled) {
            setHoveredRating(0);
        }
    };

    return (
        <>
            <h1> Rating {rating}</h1>
            <div className="container">
                {/* Actual rating stars */}
                <div className="realstarsdiv">
                    {Array.from({ length: numberOfStars }, (_, index) => (
                        <label key={index} >
                            <input
                                type="radio"
                                name="rating"
                                onClick={() => handleStarClick()}
                            />
                            <span
                                onMouseMove={(e) => handleStarHover(e, index)}
                                onMouseLeave={handleStarLeave}
                                className={`${rating + .5 == (index + 1) ? 'halfstar' : 'star'}`}
                                style={{
                                    color: index < rating ? "yellow" : "transparent"
                                }}
                            >
                                {shape}
                            </span>
                        </label>
                    ))}
                </div>
                {/* Fake stars (hovered stars) */}
                <div className="hoveredStars">
                    {Array.from({ length: numberOfStars }, (_, index) => (
                        <label key={index} >
                            <input
                                type="radio"
                                name="rating"
                                onClick={() => handleStarClick()}
                            />
                            <span
                                onMouseMove={(e) => handleStarHover(e, index)}
                                onMouseLeave={handleStarLeave}
                                style={{
                                    color: index < hoveredRating ? "yellow" : "transparent"
                                }}
                                className={`${hoveredRating + .5 == (index + 1) ? 'halfstar' : 'star'}`}
                            >
                                {shape}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Rating;
