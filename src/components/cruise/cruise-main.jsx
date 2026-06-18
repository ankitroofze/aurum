"use client";
import React, { useState } from 'react';
import { FaShip } from 'react-icons/fa';
import "../../style/cruise/cruise-main.css";

export const InflectedCard = ({
  id,
  image,
  title,
  description,
  tags,
  parentBackgroundColor,
  onClick,
  onHover,
  cardRounding = 16,
  fontSizes = {},
  margins = {},
  buttonIcon,
  buttonIconSize = 16,
  buttonIconColor = '#fff',
  buttonIconHoverColor = '#fff',
  buttonBackgroundColor = '#282828',
  buttonBackgroundHoverColor = '#484848',
  imageHoverScale = 1.08,
  titleColor = '#131f2c',
  descriptionColor = '#3c4f64',
  mirrored = false,
  titleAlignment = 'left',
  descriptionAlignment = 'left',
  tagsAlignment = 'left',
  maxWidth = '100%',
  price,
  priceTagTextColor = '#ffffff',
  oldPrice,
  oldPriceOnTheRight = false,
  oldPriceTextColor = '#c1c1c7',
  priceTagRounding = '20px',
  priceTagBackgroundColor = 'rgba(0,0,0,0.7)',
}) => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  const handleCardClick = () => {
    onClick && onClick(hoveredElement || 'card', id);
  };

  const handleMouseEnter = (element) => {
    setHoveredElement(element);
    onHover && onHover(element, id);
  };

  const handleButtonMouseEnter = () => {
    setIsButtonHovered(true);
    handleMouseEnter('button');
  };

  const handleButtonMouseLeave = () => {
    setIsButtonHovered(false);
  };

  const isRTLCheck = (text) => {
    return /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text);
  };

  const mirroredStyle = mirrored ? { transform: 'scaleX(-1)' } : {};
  const reverseMirrorStyle = mirrored ? { transform: 'scaleX(-1)' } : {};

  return (
    <div
      className="inflected-card"
      style={{
        '--card-rounding': `${cardRounding}px`,
        maxWidth: maxWidth,
        ...mirroredStyle,
      }}
      onClick={handleCardClick}
    >
      <div
        className="inflected-cardInner"
        style={{ '--parent-bg': parentBackgroundColor }}
      >
        <div className="inflected-box">
          <div
            className="inflected-imgBox"
            style={{
              ...reverseMirrorStyle,
              borderRadius: `${cardRounding}px`,
              overflow: 'hidden',
              width: '100%',
              height: '100%',
              position: 'absolute',
              inset: 0,
            }}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <img
              src={image}
              alt={title}
              draggable={false}
              style={{
                transition: 'transform 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                willChange: 'transform',
                transform: isImageHovered ? `scale(${imageHoverScale})` : 'scale(1)',
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'cover',
              }}
            />
            {price && (
              <div
                className="inflected-priceTag"
                style={{
                  position: 'absolute',
                  top: '8px',
                  [mirrored ? 'right' : 'left']: '8px',
                  backgroundColor: priceTagBackgroundColor,
                  color: priceTagTextColor,
                  padding: '3px 8px',
                  borderRadius: priceTagRounding,
                  fontSize: fontSizes.price || '0.7rem',
                  backdropFilter: 'blur(4px)',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                }}
                onMouseEnter={() => handleMouseEnter('priceTag')}
                onClick={(event) => {
                  event.stopPropagation();
                  onClick && onClick('priceTag', id);
                }}
              >
                {oldPriceOnTheRight ? (
                  <>
                    <span className="inflected-new-price" style={{ fontWeight: 'bold' }}>
                      {price}
                    </span>
                    {oldPrice && (
                      <span
                        className="inflected-old-price"
                        style={{
                          marginLeft: '4px',
                          textDecoration: 'line-through',
                          opacity: 0.7,
                          fontWeight: 'bold',
                          color: oldPriceTextColor,
                        }}
                      >
                        {oldPrice}
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    {oldPrice && (
                      <span
                        className="inflected-old-price"
                        style={{
                          textDecoration: 'line-through',
                          opacity: 0.7,
                          marginRight: '4px',
                          fontWeight: 'bold',
                          color: oldPriceTextColor,
                        }}
                      >
                        {oldPrice}
                      </span>
                    )}
                    <span className="inflected-new-price" style={{ fontWeight: 'bold' }}>
                      {price}
                    </span>
                  </>
                )}
              </div>
            )}
          </div>
          <div
            className="inflected-icon"
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
          >
            <div
              className="inflected-iconBox"
              style={{
                '--button-bg': buttonBackgroundColor,
                '--button-hover-bg': buttonBackgroundHoverColor,
                '--icon-color': buttonIconColor,
                '--icon-hover-color': buttonIconHoverColor,
                '--icon-size': `${buttonIconSize}px`,
              }}
            >
              {React.cloneElement(buttonIcon, {
                size: buttonIconSize,
                color: isButtonHovered ? buttonIconHoverColor : buttonIconColor,
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="inflected-content" data-align={titleAlignment}>
        <h3
          style={{
            fontSize: fontSizes.title || '1rem',
            color: titleColor,
            margin: margins.title,
            fontWeight: 'bold',
            direction: isRTLCheck(title) ? 'rtl' : 'ltr',
            textAlign: titleAlignment,
            ...reverseMirrorStyle,
          }}
          onMouseEnter={() => handleMouseEnter('title')}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: fontSizes.description || '0.7rem',
            color: descriptionColor,
            margin: margins.description,
            direction: isRTLCheck(description) ? 'rtl' : 'ltr',
            textAlign: descriptionAlignment,
            ...reverseMirrorStyle,
          }}
          onMouseEnter={() => handleMouseEnter('description')}
        >
          {description}
        </p>
        <ul
          style={{
            margin: margins.tags,
            display: 'flex',
            justifyContent: tagsAlignment,
            flexWrap: 'wrap',
            gap: '0.3rem',
            ...reverseMirrorStyle,
          }}
        >
          {tags.map((tag, index) => (
            <li
              key={index}
              style={{
                backgroundColor: tag.backgroundColor,
                color: tag.textColor,
                borderRadius: `${tag.rounding}px`,
                fontSize: fontSizes.tags || '0.6rem',
                direction: isRTLCheck(tag.name) ? 'rtl' : 'ltr',
                textAlign: tag.alignment || 'left',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
                padding: '0.2rem 0.5rem',
                fontWeight: '600',
                cursor: 'pointer',
              }}
              onMouseEnter={() => handleMouseEnter(`tag-${tag.name}`)}
            >
              {tag.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function CruiseDestinations() {
  const alaskaTags = [
    { name: "🏔️ Glacier Bay", textColor: "#1e3a5f", backgroundColor: "#eef2f9", rounding: 20, alignment: "left" },
    { name: "🐋 Whale Watching", textColor: "#1e3a5f", backgroundColor: "#eef2f9", rounding: 20, alignment: "left" },
    { name: "✈️ Denali Flight", textColor: "#1e3a5f", backgroundColor: "#eef2f9", rounding: 20, alignment: "left" },
  ];

  const mediterraneanTags = [
    { name: "🏛️ Santorini", textColor: "#1e3a5f", backgroundColor: "#eef2f9", rounding: 20, alignment: "left" },
    { name: "🍝 Italian Riviera", textColor: "#1e3a5f", backgroundColor: "#eef2f9", rounding: 20, alignment: "left" },
    { name: "⛵ Private Yacht", textColor: "#1e3a5f", backgroundColor: "#eef2f9", rounding: 20, alignment: "left" },
  ];

  const asiaTags = [
    { name: "🏙️ Gardens by Bay", textColor: "#1e3a5f", backgroundColor: "#eef2f9", rounding: 20, alignment: "left" },
    { name: "🗻 Mt. Fuji", textColor: "#1e3a5f", backgroundColor: "#eef2f9", rounding: 20, alignment: "left" },
    { name: "🍜 Street Food", textColor: "#1e3a5f", backgroundColor: "#eef2f9", rounding: 20, alignment: "left" },
  ];

  return (
    <div className="cruise-destinations-section">
      <div className="section-headline">
        <h2>🗺️ Our Signature Global Cruise Destinations</h2>
        <p>Curated journeys where luxury meets discovery — exclusive experiences across three iconic realms</p>
      </div>

      <div className="cards-row">
        <InflectedCard
          id="alaska"
          image="https://karryon.com.au/wp-content/uploads/2019/11/MG_1371.jpg"
          title="Untamed Alaska"
          description="Majestic glaciers & breaching whales"
          tags={alaskaTags}
          parentBackgroundColor="#eef2f7"
          price="$2,890"
          oldPrice="$3,990"
          buttonIcon={<FaShip />}
          buttonIconSize={16}
          buttonIconColor="#fff"
          buttonIconHoverColor="#ffe6b3"
          buttonBackgroundColor="#282828"
          buttonBackgroundHoverColor="#484848"
          titleColor="#131f2c"
          descriptionColor="#3c4f64"
          cardRounding={16}
          onClick={(target, id) => alert(`✨ ${id} cruise clicked!`)}
        />

        <InflectedCard
          id="mediterranean"
          image="https://i.pinimg.com/736x/ed/2b/ee/ed2beec0a3b1b4e95881bdd9dc8d1732.jpg"
          title="Sun-Drenched Med"
          description="Santorini to Amalfi coastal glamour"
          tags={mediterraneanTags}
          parentBackgroundColor="#fff4ea"
          price="€2,450"
          oldPrice="€3,200"
          buttonIcon={<FaShip />}
          buttonIconSize={16}
          buttonIconColor="#fff"
          buttonIconHoverColor="#ffe6b3"
          buttonBackgroundColor="#282828"
          buttonBackgroundHoverColor="#484848"
          titleColor="#131f2c"
          descriptionColor="#3c4f64"
          cardRounding={16}
          onClick={(target, id) => alert(`✨ ${id} cruise clicked!`)}
        />

        <InflectedCard
          id="asia"
          image="https://a.cdn-hotels.com/gdcs/production18/d1838/041ae6b1-0a88-4c22-a648-53a22dd4a006.jpg"
          title="Exotic Asia"
          description="Skylines, temples & culinary journeys"
          tags={asiaTags}
          parentBackgroundColor="#e9f0f5"
          price="$3,290"
          oldPrice="$4,150"
          buttonIcon={<FaShip />}
          buttonIconSize={16}
          buttonIconColor="#fff"
          buttonIconHoverColor="#ffe6b3"
          buttonBackgroundColor="#282828"
          buttonBackgroundHoverColor="#484848"
          titleColor="#131f2c"
          descriptionColor="#3c4f64"
          cardRounding={16}
          onClick={(target, id) => alert(`✨ ${id} cruise clicked!`)}
        />
      </div>
    </div>
  );
}