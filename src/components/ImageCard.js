import React from 'react';
import PropTypes from 'prop-types';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {
      spans: 0,
      margin: 0
    }
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    console.log('image height', this.imageRef.current.clientHeight, this.imageRef.current.offsetHeight);
    const height = Math.floor(this.imageRef.current.clientHeight / 5);
    this.setState({ spans: height });

    // if 
  }

  render() {
    const { urls, description } = this.props.image;
    const { spans } = this.state;
    return (
      <div style={{ gridRowEnd: `span ${spans}` }}>
        <img ref={this.imageRef} className="image" src={urls.regular} alt={description} />
      </div>
    ) 
  }
}

ImageCard.propTypes = {
  image: PropTypes.object
}

export default ImageCard;