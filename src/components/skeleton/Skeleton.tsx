import CardSkeleton from './CardSkeleton'
import ImagePlaceholderSkeleton from './ImagePlaceholderSkeleton'
import NavbarSkeleton from './NavbarSkeleton'
import './skeleton.styles.scss'

export enum skeletonShapes {
    CARD = 'CARD',
    IMAGE_PLACEHOLDER = 'IMAGE_PLACEHOLDER',
    DEFAULT = 'DEFAULT',
    NAVBAR = 'NAVBAR'
}

export type SkeletonProps = {
    animationSpeed?: number

}

const Skeleton = ({ shape }: { shape: skeletonShapes }) => {
    console.log(shape)

    return (
        <>
            <div>example of stuff

            </div>
            <div className="skeleton-container">
                {shape === skeletonShapes.CARD && <CardSkeleton />}
                {shape === skeletonShapes.IMAGE_PLACEHOLDER && <ImagePlaceholderSkeleton />}
                {shape === skeletonShapes.DEFAULT && <>
                    <div className="skeleton-item skeleton-header"></div>
                    <div className="skeleton-item skeleton-content"></div>
                    <div className="skeleton-item skeleton-content"></div>
                    <div className="skeleton-item skeleton-content"></div>
                </>}

            </div>

            examples
            <br></br>
            navbar
            <NavbarSkeleton />
            default
            <div className="skeleton-container">

                <div className="skeleton-item skeleton-header"></div>
                <div className="skeleton-item skeleton-content"></div>
                <div className="skeleton-item skeleton-content"></div>
                <div className="skeleton-item skeleton-content"></div></div>
            img
            <ImagePlaceholderSkeleton />

            card
            <CardSkeleton />

        </>
    )
}

export default Skeleton