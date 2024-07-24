import './skeleton.styles.scss'



const CardSkeleton = () => {

    return (
        <>
            <div className="skeleton-card">
                <div className="skeleton-image"></div>
                <div className="skeleton-details">
                </div>
                <div className="skeleton-details">
                </div>
                <div className='skeleton-button'></div>
            </div>
        </>
    )
}

export default CardSkeleton