import decorateComponentWithProps from 'decorate-component-with-props';
import { addAtomicBlock } from '@jimmycode/draft-js-toolbox';
import SelectImageButton from './components/Button';

export default ({ imageType = 'IMAGE' } = {}) => {
  return {
    SelectImageButton: decorateComponentWithProps(SelectImageButton, {
      entityType: imageType,
      addImage: addAtomicBlock
    })
  };
};
