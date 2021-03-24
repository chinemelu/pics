import React from 'react';
import PropTypes from 'prop-types';
import './ImageList.css'
const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img className="image" src={urls.regular} key={id} alt={description} />;
  })
  return <div className="image-list">{images}</div>
}
  
ImageList.propTypes = {
  images: PropTypes.array 
}

export default ImageList