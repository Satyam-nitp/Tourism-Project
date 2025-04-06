import React, {useEffect, useState} from 'react';
import temples from './data';


// Manually map folderId to corresponding require.context
const imageContexts = {
  1: require.context('../Vrindavan_gallery/temple1', false, /.*$/),
  2: require.context('../Vrindavan_gallery/temple2', false, /.*$/),
  3: require.context('../Vrindavan_gallery/temple3', false, /.*$/),
  4: require.context('../Vrindavan_gallery/temple4', false, /.*$/),
  5: require.context('../Vrindavan_gallery/temple5', false, /.*$/),
  6: require.context('../Vrindavan_gallery/temple6', false, /.*$/),
  7: require.context('../Vrindavan_gallery/temple7', false, /.*$/)
};

function ScrollImg({ id, name, info , fav}) {
  const inform=info.substring(0,100);

  const [readMore, setReadMore] = useState(false);
  function readmoreHandler() {
    setReadMore(!readMore);
  }


  // Function to dynamically load images from a specific folder
  const [images, setImages] = useState([]);

  // Dynamically load images based on id
  useEffect(() => {
    const loadImages = async (id) => {
      try {
        const context = imageContexts[id];
        
        if (context) {
          const imageFiles = context.keys().map(context);
          setImages(imageFiles);
        } else {
          console.error(`No images found for temple${id}`);
          setImages([]);
        }
      } catch (error) {
        console.error(`Error loading images from temple${id}:`, error);
        setImages([]);
      }
    };

    loadImages(id);
  }, [id]);  // Dependency on id


  
  const span1Style = {
    opacity: 0.75,
  };
  const span2Style = {
      opacity: 0.5,
  };
  const span3Style = {
      opacity: 0.25,
  };
  const colors = {
      color: 'red',
      fontSize: '0.75rem',
      marginTop: '-0.5rem',
  };

  const [color, setColor] = useState('#ff00003d');

  // Function to handle the click and change the color
  const handleClick = () => {
    if(fav) setColor('red'); // Toggle between red and blue
    else setColor('#ff00003d'); // Toggle between red and blue
  };

  const addtoFav = (id) => {
    temples.forEach(item => {
      if(item.id === id){
        item.fav = !item.fav;
        fav=item.fav;
        handleClick();
      }
    });
    console.log(temples);
  };


  return (
    <div className="temple-section">
      <span className='heart' style={{ color: color}} onClick={()=>addtoFav(id)}>&#10084;</span>
      <h2>{name}</h2>
      <p>
        {readMore ? `${info}` : `${inform}....`}<span className="readMore" onClick={readmoreHandler}>{readMore ? 'Showless' : 'ReadMore'}</span>
      </p>
      <div className="scrollable-div">
        {images.length > 0 ? (
          images.map((img, index) => (
            <img src={img} alt={`${name} - Photo ${index + 1}`} key={index} className="photo" />
          ))
        ) : (
          <p>No images available.</p>
        )}
      </div>
      <p style={colors}>Scroll to see more images<span style={span1Style}>&gt;</span><span style={span2Style}>&gt;</span><span style={span3Style}>&gt;</span></p>
    </div>
  );
}

export default ScrollImg;
