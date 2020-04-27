import React from 'react'

export const Image = ({imageUrl, imageName}) => {
    return (
        <div className="image-wrapper">
            <img className="image" alt={imageName} src={imageUrl} height="200px" width="300px"/>
        </div>
    )
}
