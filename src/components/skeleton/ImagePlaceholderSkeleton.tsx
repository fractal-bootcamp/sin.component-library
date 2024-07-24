import './skeleton.styles.scss'



const ImagePlaceholderSkeleton = () => {

    return (
        <>
            <div className="skeleton-container" style={{ height: '200px' }}>
                <div className='skeleton-imageplaceholdercontainer'>

                    <div className="skeleton-image"></div>
                    <div className='skeleton-image-details-container'>
                        <div className="skeleton-image-details"></div>
                        <div className="skeleton-image-details"></div>
                        <div className="skeleton-image-details"></div>
                        <div className="skeleton-image-details"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImagePlaceholderSkeleton