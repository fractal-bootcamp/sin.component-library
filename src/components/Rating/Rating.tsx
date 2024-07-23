import { useEffect, useState } from "react";
import "./rating.scss"; // Assuming you have a Sass file for styling


export interface RatingProps {
    totalStars: number;
    shape?: string;
    disabled?: boolean
    readOnly?: boolean;
    readOnlyValue?: number
}

const Rating: React.FC<RatingProps> = ({
    totalStars = 5,
    shape,
    disabled = false,
    readOnly,
    readOnlyValue = totalStars
}) => {
    const numberOfStars = totalStars
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);


    useEffect(() => {
        if (readOnly) {
            setRating(readOnlyValue)
        }
    }, [])

    const handleStarClick = () => {
        if (!disabled && !readOnly) {
            setRating(hoveredRating);

        }
    };

    const handleStarHover = (e, index) => {
        if (!disabled && !readOnly) {
            const starWidth = e.target.offsetWidth;
            const mouseX = e.clientX - e.target.getBoundingClientRect().left;
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

    const renderSymbol = (content: string) => {
        return (
            <span>{content}</span>
        );
    };
    const symbolElement = renderSymbol(shape);


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
                                onClick={() => handleStarClick(index)}
                            />
                            <span
                                onMouseMove={(e) => handleStarHover(e, index)}
                                onMouseLeave={handleStarLeave}
                                className={`${rating + .5 == (index + 1) ? 'halfstar' : 'star'}`}
                                style={{
                                    color: index < rating ? "yellow" : "transparent"
                                }}
                            >
                                {symbolElement}

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
                                onClick={() => handleStarClick(index)}
                            />
                            <span
                                onMouseMove={(e) => handleStarHover(e, index)}
                                onMouseLeave={handleStarLeave}
                                style={{
                                    color: index < hoveredRating ? "yellow" : "transparent"
                                }}
                                className={`${hoveredRating + .5 == (index + 1) ? 'halfstar' : 'star'}`}
                            >
                                {symbolElement}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Rating;
