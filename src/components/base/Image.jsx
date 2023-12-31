import images from 'imports/ImagesImport';
import React from 'react'

const Image = ({src, className, width, height, alt, onClick, loading, title }) => {

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
        onClick={onClick}
        alt={alt}
        title={title}
        onError={handleImageError}
      />
  )
}

export default Image