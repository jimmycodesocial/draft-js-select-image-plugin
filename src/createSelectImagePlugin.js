import decorateComponentWithProps from 'decorate-component-with-props';
import SelectImageButton from './components/SelectImageButton';
import addImage from './modifiers/addImage';

export default ({ imageType = 'IMAGE' } = {}) => {
  return {
    SelectImageButton: decorateComponentWithProps(SelectImageButton, {
      entityType: imageType,
      addImage
    })
  };
};
