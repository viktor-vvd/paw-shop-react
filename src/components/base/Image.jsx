import images from 'imports/ImagesImport';
import React from 'react'

const Image = ({src, className, width, height, alt, loading, key }) => {

  const handleImageError = (event) => {
    event.target.src = images["defaultImg"];
  };
    
  return (
      <img
        className={className}
        src={src || images["defaultImg"]}
        width={width}
        height={height}
        loading={loading}
        alt={alt}
        key={key}
        onError={handleImageError}
      />
  )
}

export default Image