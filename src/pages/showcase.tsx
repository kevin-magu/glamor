import React, { useState, useRef } from 'react';
import './showcase.css';

interface ImageData {
  id: string;
  file: File;
  previewUrl: string;
  caption: string;
}

const RealEstateShowcase: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(Array.from(e.target.files));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(Array.from(e.dataTransfer.files));
    }
  };

  const processFiles = (files: File[]) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    const newImages = imageFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      previewUrl: URL.createObjectURL(file),
      caption: file.name.split('.')[0] // Use filename without extension as initial caption
    }));

    setImages(prev => [...prev, ...newImages]);
  };

  const updateCaption = (id: string, caption: string) => {
    setImages(prev => 
      prev.map(img => 
        img.id === id ? { ...img, caption } : img
      )
    );
  };

  const removeImage = (id: string) => {
    setImages(prev => {
      const imageToRemove = prev.find(img => img.id === id);
      if (imageToRemove) {
        URL.revokeObjectURL(imageToRemove.previewUrl);
      }
      return prev.filter(img => img.id !== id);
    });
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="showcase-container">
      <header className="showcase-header">
        <h1>Real Estate Platform Showcase</h1>
        <p>Upload images to showcase your properties to local companies</p>
      </header>

      <div 
        className={`upload-area ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <div className="upload-content">
          <svg className="upload-icon" viewBox="0 0 24 24" width="48" height="48">
            <path fill="currentColor" d="M14,13V17H10V13H7L12,8L17,13M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z" />
          </svg>
          <p>Drag & drop images here or click to browse</p>
          <span className="upload-subtext">Supports JPG, PNG, and WebP formats</span>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp"
          onChange={handleFileChange}
          className="file-input"
        />
      </div>

      {images.length > 0 && (
        <div className="images-grid">
          {images.map((image) => (
            <div key={image.id} className="image-card">
              <div className="image-container">
                <img src={image.previewUrl} alt={image.caption} />
                <button 
                  className="remove-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage(image.id);
                  }}
                  aria-label="Remove image"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                  </svg>
                </button>
              </div>
              <input
                type="text"
                value={image.caption}
                onChange={(e) => updateCaption(image.id, e.target.value)}
                className="caption-input"
                placeholder="Add a caption..."
              />
            </div>
          ))}
        </div>
      )}

      {images.length > 0 && (
        <div className="actions">
          <button className="download-button">
            Download All Images
          </button>
          <button className="share-button">
            Generate Share Link
          </button>
        </div>
      )}
    </div>
  );
};

export default RealEstateShowcase;