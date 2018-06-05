import React from 'react';
import PropTypes from 'prop-types';

/**
 * Icon by: https://www.iconfinder.com/icons/290132/gallery_image_photo_photography_picture_pictures_icon#size=24
 */
class SelectImageButton extends React.PureComponent {
  onClick = () => {
    this.input.value = null;
    this.input.click();
  }

  onMouseDown = (event) => {
    event.preventDefault();
  }  

  /**
   * When a file is selected.
   * @param {*} event
   */
  onChange = (event) => {
    const file = event.target.files[0];
    const { getEditorState, setEditorState, entityType, addImage } = this.props;

    if (file.type.indexOf('image/') === 0) {
      const src = URL.createObjectURL(file);
      setEditorState(addImage(getEditorState(), entityType, { src }));
    }

    if (this.props.close) {
      this.props.close();
    }
  }

  blockTypeIsActive = () => {
    const editorState = this.props.getEditorState();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(editorState.getSelection().getStartKey())
      .getType();

    return blockType === this.props.entityType;
  };

  render() {
    const { theme } = this.props;
    const className = this.blockTypeIsActive()
      ? `${theme.button} ${theme.active}`
      : theme.button;

    return (
      <div className={theme.buttonWrapper} onMouseDown={this.onMouseDown}>
        <button 
          className={className} 
          onClick={this.onClick} 
          title="Add an Image"
          type="button">

          <svg 
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 48 48" 
            enableBackground="new 0 0 48 48" 
            height="24"
            width="24">
              <path 
                clipRule="evenodd" 
                fillRule="evenodd"
                d="M43,41H5c-2.209,0-4-1.791-4-4V11c0-2.209,1.791-4,4-4h38c2.209,0,4,1.791,4,4v26  C47,39.209,45.209,41,43,41z M45,11c0-1.104-0.896-2-2-2H5c-1.104,0-2,0.896-2,2v26c0,1.104,0.896,2,2,2h38c1.104,0,2-0.896,2-2V11z   M41.334,34.715L35,28.381L31.381,32l3.334,3.334c0.381,0.381,0.381,0.999,0,1.381c-0.382,0.381-1,0.381-1.381,0L19,22.381  L6.666,34.715c-0.381,0.381-0.999,0.381-1.381,0c-0.381-0.382-0.381-1,0-1.381L18.19,20.429c0.032-0.048,0.053-0.101,0.095-0.144  c0.197-0.197,0.457-0.287,0.715-0.281c0.258-0.006,0.518,0.084,0.715,0.281c0.042,0.043,0.062,0.096,0.095,0.144L30,30.619  l4.19-4.19c0.033-0.047,0.053-0.101,0.095-0.144c0.197-0.196,0.457-0.287,0.715-0.281c0.258-0.006,0.518,0.085,0.715,0.281  c0.042,0.043,0.062,0.097,0.095,0.144l6.905,6.905c0.381,0.381,0.381,0.999,0,1.381C42.333,35.096,41.715,35.096,41.334,34.715z   M29,19c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S31.209,19,29,19z M29,13c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2  S30.104,13,29,13z" />
          </svg>
        
          <input
            ref={ref => this.input = ref}
            type="file"
            accept="image/*"
            onChange={this.onChange}
            style={{ display: 'none' }} />
        </button>
      </div>
    );
  }
}

SelectImageButton.propTypes = {
  theme: PropTypes.object,
  entityType: PropTypes.string.isRequired,
  addImage: PropTypes.func.isRequired,
  close: PropTypes.func
};

SelectImageButton.defaultProps = {
  theme: {},
};

export default SelectImageButton;