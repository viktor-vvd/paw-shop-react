import images from "imports/ImagesImport";
import React from "react";

const Image = ({
  src,
  className,
  width,
  height,
  alt,
  onClick,
  loading,
  title,
}) => {
  const handleImageError = (event) => {
    event.target.src = images["defaultImg"];
  };

  // Take a full image object if provided, otherwise fallback to src string
  const img = typeof src === "object" ? src : null;

  // Extract variations only if available
  const big = img?.conversions?.big?.url;
  const preview = img?.conversions?.preview?.url;
  const thumb = img?.conversions?.thumb?.url;

  const mainUrl =
    img?.url || (typeof src === "string" ? src : images["defaultImg"]);

  const hasSrcset = big || preview || thumb;

  // Build srcset string automatically
  const srcset = [
    big ? `${big} 1200w` : null,
    preview ? `${preview} 800w` : null,
    thumb ? `${thumb} 400w` : null,
  ]
    .filter(Boolean)
    .join(", ");

  const sizes = `
    (max-width: 480px) 400px,
    (max-width: 1024px) 800px,
    1200px
  `;

  // If no conversions exist → fallback to normal <img>
  if (!hasSrcset) {
    return (
      <img
        className={className}
        src={mainUrl}
        width={width}
        height={height}
        loading={loading}
        onClick={onClick}
        alt={alt}
        title={title}
        onError={handleImageError}
      />
    );
  }

  return (
    <picture>
      {big && (
        <source srcSet={big} media="(min-width: 1025px)" type="image/webp" />
      )}

      {preview && (
        <source srcSet={preview} media="(min-width: 481px)" type="image/webp" />
      )}

      {thumb && (
        <source srcSet={thumb} media="(max-width: 480px)" type="image/webp" />
      )}

      <img
        className={className}
        src={mainUrl}
        srcSet={srcset}
        sizes={sizes}
        width={width}
        height={height}
        loading={loading}
        onClick={onClick}
        alt={alt}
        title={title}
        onError={handleImageError}
      />
    </picture>
  );
};

export default Image;
