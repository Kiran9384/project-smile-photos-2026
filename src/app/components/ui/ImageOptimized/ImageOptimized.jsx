// src/app/components/ui/ImageOptimized/ImageOptimized.jsx
import React, { useRef, useState, useEffect } from 'react';
import './ImageOptimized.css';

/**
 * ImageOptimized – lazy loads an image, serves WebP when possible,
 * shows a blurred low‑resolution placeholder while the high‑resolution image loads.
 *
 * Props:
 *  - src: string (required) – URL of the high‑resolution image (any format).
 *  - alt: string – alt text.
 *  - className?: string – CSS class applied to the underlying <img>.
 *  - style?: React.CSSProperties – inline styles for the <img>.
 *  - placeholderSrc?: string – optional low‑res placeholder image URL. If omitted a tiny transparent pixel is used.
 */
const ImageOptimized = ({ src, alt = '', className = '', style = {}, placeholderSrc }) => {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Derive a WebP source if the original is not already WebP
  const webpSrc = src.replace(/\.(jpe?g|png|gif|svg)$/i, '.webp');

  // Simple placeholder – a transparent pixel if none supplied
  const placeholder = placeholderSrc || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4=';

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // When the high‑resolution image finishes loading, remove blur
  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className="image-optimized-wrapper"
      ref={containerRef}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Placeholder image (blurred) */}
      <img
        src={placeholder}
        alt=""
        aria-hidden="true"
        className={`placeholder ${isLoaded ? 'loaded' : ''}`}
        style={{
          ...style,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: isLoaded ? 'blur(0px)' : 'blur(20px)',
          transition: 'filter 0.3s ease-out',
        }}
      />
      {isInView && (
        <picture>
          {/* WebP source – browsers that support it will use this */}
          <source srcSet={webpSrc} type="image/webp" />
          {/* Fallback to original format */}
          <img
            src={src}
            alt={alt}
            className={`${className} ${isLoaded ? 'loaded' : ''}`}
            style={{
              ...style,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-out',
            }}
            loading="lazy"
            onLoad={handleLoad}
          />
        </picture>
      )}
    </div>
  );
};

export default ImageOptimized;
