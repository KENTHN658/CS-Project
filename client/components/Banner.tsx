import React, { CSSProperties } from 'react';

interface BannerProps {
  imageSrc: string;
  altText: string;
  backgroundColor?: string;
  textColor?: string;
  title: string;
  subtitle: string;
  customStyles?: CSSProperties; // Additional styles as an object
}

function Banner({
  imageSrc,
  altText,
  backgroundColor,
  textColor,
  title,
  subtitle,
  customStyles, // Additional styles as an object
}: BannerProps) {
  const bannerStyle: CSSProperties = {
    position: 'absolute',
    backgroundColor: backgroundColor || 'rgba(242, 157, 53, 0.76)',
    color: textColor || 'white',
    padding: '20px',
    width: customStyles?.width || 'auto',
    height: customStyles?.height || '120px',
    bottom: customStyles?.bottom || '-35px',
    left: '0',
  };

  const bannerStyle_m: CSSProperties = {
    position: 'absolute',
    backgroundColor: backgroundColor || 'rgba(242, 157, 53, 0.76)',
    color: textColor || 'white',
    padding: '10px',
    width: customStyles?.width || 'auto',
    height: customStyles?.height || '75px',
    bottom: customStyles?.bottom || '-25px',
    left: '0',
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'relative' }}>
        <img src={imageSrc} alt={altText} style={{ width: '100%' }} />
        <div style={bannerStyle} className="pb-5 hidden md:block">
          <p className="font-bold uppercase">{title}</p>
          <h1 className="text-5xl font-bold uppercase">{subtitle}</h1>
        </div>
        <div style={bannerStyle_m} className="pb-5 md:hidden">
          <p className="font-bold text-sm uppercase">{title}</p>
          <h1 className="text-lg font-bold uppercase">{subtitle}</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
