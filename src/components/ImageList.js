import React from 'react';
import PropTypes from 'prop-types';

import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard className="image" key={image.id} image={image}/>;
  })
  return <div className="image-list">{images}</div>
}
  
ImageList.propTypes = {
  images: PropTypes.array 
}

export default ImageList