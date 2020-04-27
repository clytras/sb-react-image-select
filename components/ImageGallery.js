import React, {useState, useEffect} from 'react'
import { Image } from './Image'


export const ImageGallery = ({theme}) => {
    const [imageNames, setImageNames] = useState([]);
    const fileListUrl = `/api/folders/${theme}`
    const baseUrl = `/images/${theme}/`;

    useEffect(() => {
        const fetchFileNames = async () => {
            const data = await fetch(fileListUrl)
            const files = await data.json()
            setImageNames(files);
        }
        fetchFileNames();
    }, [fileListUrl,theme]);

    console.log('imageNames', imageNames)

    return (
        <div className="gallery-container">
           {imageNames && imageNames.map(imageName => <Image key={imageName} imageName={imageName} imageUrl={baseUrl+imageName}/>)}
        </div>
    )
}
