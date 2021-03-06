import React from 'react';
import PropTypes from 'prop-types';

import './ImageList.css';

class SearchBar extends React.Component {
  state = {
    term: '',
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit((this.state.term))
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="term">Image Search</label>
            <input
              type="text"
              id="term"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func
}

export default SearchBar;
