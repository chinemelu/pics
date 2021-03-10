import React from 'react';
import PropTypes from 'prop-types';

const ImageList = (props) => {
  const images = props.images.map(image => {
    return <img src={image.urls.regular} key={image.id} />;
  })
  console.log(images);
  return <div>{images}</div>
}
  
ImageList.propTypes = {
  images: PropTypes.array 
}

export default ImageList